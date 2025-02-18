/** @module client */
import { Encryption } from "./encryption.js";
import { Encoder } from './encoding.js';
import { MutexLock } from './mutex.js';
import {
    sleep,
    mergeTypedArrays,
    arrayBufferToHexString
} from "./helpers.js";

/**
 * Split a typed array into multiple typed arrays of a fixed size.
 *
 * @param {TypedArray} array - The array to split.
 * @param {number} size - The size of each chunk.
 * @returns {Array<TypedArray>} - An array of typed arrays.
 */
function *chunkArray(array, size) {
    for (let i = 0; i < array.length; i += size) {
        yield array.slice(i, i + size);
    }
}

const maximumMessageSize = 1024 * 1024; // 1 MB

/** 
 * Class representing a client connection to a server using WebSockets.
 *
 * @class
 */
export class Client {
    /**
     * Create a client.
     *
     * @param {string} address - The address of the server to connect to.
     */
    constructor(address, debug = false) {
        this.socket = null;
        this.address = address;
        this.lock = new MutexLock();
        this.debug = debug;
        this.messageLength = null;
        this.messageBuffer = [];
        this.messageListeners = [];
        this.errorListeners = [];
    }

    /**
     * @returns {boolean} - Whether the client is websockets or http.
     */
    get isWebsocket() {
        return this.address.startsWith("ws://") || this.address.startsWith("wss://");
    }

    /**
     * @returns {boolean} - Whether the client is secure or not.
     */
    get isSecure() {
        return this.address.startsWith("wss://") || this.address.startsWith("https://") || (!this.hasProtocol && window !== undefined && window.location.protocol === "https:");
    }

    /**
     * Determines if an address has a protocol or not.
     */
    get hasProtocol() {
        return this.addressHasProtocol(this.address);
    }

    /**
     * Gets the hostname from the address, when possible, otherwise
     * gets the hostname from the window location, and when that is not
     * available, returns null.
     */
    get hostname() {
        if (this.hasProtocol) {
            return new URL(this.address).hostname;
        } else if (window !== undefined && window.location !== undefined) {
            return window.location.hostname;
        }
        return null;
    }

    /**
     * Get the address of the server.
     * An alias for the 'url' property.
     */
    get address() {
        return this.url;
    }

    /**
     * Set the address of the server.
     *
     * @param {string} newAddress - The new address of the server to connect to.
     * If the address is the same as the current address, the function will return early.
     * If the address is different from the current address, the function will close the current
     * connection and open a new connection to the new address. Will NOT wait for that connection to open.
     */
    set address(newAddress) {
        this.url = newAddress;
        if (this.socket && this.socket.url === newAddress) {
            return;
        } else {
            this.close();
        }
    }

    /**
     * A helper to determines if an address has a protocol or not.
     */
    addressHasProtocol(address) {
        const protocolRegex = /^[a-z]+:\/\//;
        return protocolRegex.test(address);
    }

    /**
     * Get the WebSocket connection once it is open.
     *
     * @returns {Promise<WebSocket>} - A promise that resolves to the WebSocket connection.
     */
    getWebsocket() {
        return new Promise((resolve, reject) => {
            this.lock.acquire().then((release) => {
                try { 
                    if (this.socket !== null && this.socket !== undefined) {
                        if (this.socket.readyState === WebSocket.OPEN) {
                            resolve(this.socket);
                            return;
                        } else if (this.socket.readyState !== WebSocket.CONNECTING) {
                            this.close();
                        }
                    }
                    if (this.socket === null || this.socket === undefined) {   
                        this.socket = new WebSocket(this.address);
                        this.socket.binaryType = "arraybuffer";
                        this.socket.addEventListener("open", () => {
                            resolve(this.socket);
                        });
                        this.socket.addEventListener("message", async (event) => {
                            await this.pushMessageChunk(event.data);
                        });
                        this.socket.addEventListener("error", (error) => {
                            this.dispatchError(error);
                        });
                    } else {
                        throw new Error(`WebSocket connection is in state ${this.socket.readyState}.`);
                    }
                } catch (error) {
                    console.error("Error getting WebSocket connection:", error);
                    if (this.socket !== null && this.socket !== undefined) {
                        try {
                            this.socket.close();
                        } catch (error) {}
                        delete this.socket;
                    }
                    this.dispatchError(error);
                    reject(error);
                } finally {
                    release();
                }
            });
        });
    }

    /**
     * Close the WebSocket connection to the server if it is open.
     */
    close() {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.lock.acquire().then((release) => {
                this.socket.close();
                delete this.socket;
                release();
            });
        }
    }

    /**
     * Push a message chunk to the message buffer.
     * If the message buffer is complete, decode the message and dispatch it.
     *
     * @param {ArrayBuffer} chunk - The chunk of the message to push.
     */
    async pushMessageChunk(chunk) {
        if (this.messageLength === null && chunk.byteLength >= 4) {
            this.messageLength = new DataView(chunk).getUint32(0);
            chunk = chunk.slice(4);
        }
        this.messageBuffer.push(new Uint8Array(chunk))
        let totalSize = this.messageBuffer.reduce((acc, chunk) => acc + chunk.byteLength, 0);
        if (this.messageLength !== null && totalSize >= this.messageLength) {
            if (this.messageBuffer.length === 1) {
                this.dispatchMessage(await Encoder.decode(this.messageBuffer[0]));
            } else {
                this.dispatchMessage(await Encoder.decode(mergeTypedArrays(this.messageBuffer)));
            }
            this.messageLength = null;
            this.messageBuffer = [];
        }
    }

    /**
     * Add a message listener to the client.
     *
     * @param {Function} callback - The callback function to add.
     * The callback function should take a single argument, the decoded message data.
     */
    onMessage(callback) {
        this.messageListeners.push(callback);
    }

    /**
     * Add an error listener to the client.
     *
     * @param {Function} callback - The callback function to add.
     * The callback function should take a single argument, the error data.
     */
    onError(callback) {
        this.errorListeners.push(callback);
    }

    /**
     * Remove a message listener from the client.
     *
     * @param {Function} callback - The callback function to remove.
     * The callback function should be the same function that was added with onMessage.
     */
    offMessage(callback) {
        this.messageListeners = this.messageListeners.filter((listener) => listener !== callback);
    }

    /**
     * Remove an error listener from the client.
     *
     * @param {Function} callback - The callback function to remove.
     * The callback function should be the same function that was added with onError.
     */
    offError(callback) {
        this.errorListeners = this.errorListeners.filter((listener) => listener !== callback);
    }

    /**
     * Dispatch a message to all message listeners.
     *
     * @param {Object} data - The message data to dispatch.
     */
    dispatchMessage(data) {
        if (this.debug) {
            console.log("Received message:", data);
        }
        this.messageListeners.forEach((listener) => listener(data));
    }

    /**
     * Dispatch an error to all error listeners.
     *
     * @param {Object} error - The error data to dispatch.
     */
    dispatchError(error) {
        if (this.debug) {
            console.error("Received error:", error);
        }
        this.errorListeners.forEach((listener) => listener(error));
    }

    /**
     * Send a message to the server.
     * Pack the message using the Encoder.encode function before sending,
     * and unpack the message using the Encoder.decode function when receiving.
     *
     * @param {Object} message - The message to send to the server.
     * @returns {Promise<Object>} - A promise that resolves the decoded response.
     */
    send(message, wait = true) {
        if (this.debug) {
            console.log("Sending message:", message, "to", this.address);
        }
        return new Promise(async (resolve, reject) => {
            try {
                if (this.isWebsocket) {
                    let [websocket, encodedMessage] = await Promise.all([this.getWebsocket(), Encoder.encode(message)]);
                    if (wait) {
                        let onMessage = (data) => { resolve(data); this.offMessage(onMessage); };
                        let onError = (error) => { reject(error); this.offError(onError); }
                        this.onMessage(onMessage);
                        this.onError(onError);
                    }

                    let messageLength = new Uint8Array(new ArrayBuffer(4)),
                        sentMessageLength = false;

                    new DataView(messageLength.buffer).setUint32(0, encodedMessage.length);

                    for (let chunk of chunkArray(encodedMessage, maximumMessageSize)) {
                        if (!sentMessageLength) {
                            await websocket.send(mergeTypedArrays([messageLength, chunk]));
                            sentMessageLength = true;
                        } else {
                            await websocket.send(chunk);
                        }
                    }
                    if (!wait) {
                        resolve();
                    }
                } else {
                    let encodedMessage = await Encoder.encode(message);
                    let response = await fetch(
                        this.address,
                        {
                            method: "POST",
                            body: encodedMessage,
                            headers: {
                                "Content-Type": "application/octet-stream"
                            }
                        }
                    );
                    if (response.ok) {
                        let data = await response.arrayBuffer();
                        let decoded = await Encoder.decode(new Uint8Array(data));
                        this.dispatchMessage(decoded);
                        resolve(decoded);
                    } else {
                        let error = new Error(`Error sending message: ${response.statusText}`);
                        this.dispatchError(error);
                        reject(error);
                    }
                }
            } catch (error) {
                reject(error);
            }
        });
    }
}

/**
 * Class representing a client connection to a server using WebSockets.
 * This client will automatically track message IDs and wait for responses,
 * assuming that the server will respond with the same ID.
 */
export class IDTrackingClient extends Client {
    /**
     * Send a message to the server.
     * Pack the message using the Encoder.encode function before sending,
     * and unpack the message using the Encoder.decode function when receiving.
     * This waits for a response with the same ID as the message.
     *
     * @param {Object} message - The message to send to the server.
     * @returns {Promise<Object>} - A promise that resolves the decoded response.
     */
    send(message, wait = true) {
        if (typeof message === "string") {
            return super.send(message, wait);
        } else if (!message instanceof Object) {
            throw new Error("Message must be an object.");
        }
        let messageId;
        if (message.request !== undefined && message.request !== null && message.request.id !== undefined) {
            messageId = message.request.id;
        } else if (message.id !== undefined) {
            messageId = message.id;
        } else {
            throw new Error("Message must have an ID.");
        }
        if (wait) {
            return new Promise((resolve, reject) => {
                let onMessage = (data) => {
                    if (data instanceof Error) {
                        reject(data);
                    } else if (data.id === messageId) {
                        resolve(data);
                        this.offMessage(onMessage);
                    }
                };
                let onError = (error) => {
                    reject(error);
                    this.offError(onError);
                    this.offMessage(onMessage);
                };
                this.onMessage(onMessage);
                this.onError(onError);
                super.send(message, false);
            });
        }
        return super.send(message, false);
    }
}

/**
 * Class representing a client connection to a server using WebSockets.
 * Includes additional functionality for control clients, which can send encrypted
 * messages to the server that control the server's behavior.
 */
export class ControlClient extends Client {
    /**
     * Sets the encryption key for the control client.
     * @param {string} key - The encryption key to use.
     */
    set encryptionKey(key) {
        this.key = key;
        this.encryption = new Encryption(key);
    }

    /**
     * Gets the encryption key for the control client.
     * @returns {string} - The encryption key.
     */
    get encryptionKey() {
        return this.key;
    }

    /**
     * Send a control message to the server.
     * Pack the message using the Encoder.encode function before sending,
     * and unpack the message using the Encoder.decode function when receiving.
     *
     * @param {Object} message - The message to send to the server.
     * @returns {Promise<Object>} - A promise that resolves the decoded response.
     */
    send(message, wait = true) {
        const key = this.encryptionKey;
        const now = Date.now();
        const controlMessage = typeof message === "string" ? message : JSON.stringify(message);
        if (key === undefined || key === null || key === "") {
            return super.send(`control:${now}:${controlMessage}`, wait);
        }
        return new Promise((resolve, reject) => {
            Encoder.encode(`${now}:${controlMessage}`).then((encodedMessage) => {
                this.encryption.encrypt(encodedMessage).then((encryptedMessage) => {
                    const completeMessage = `control:${arrayBufferToHexString(encryptedMessage)}`;
                    super.send(completeMessage, wait).then((response) => {
                        resolve(response);
                    }).catch(reject);
                }).catch(reject);
            }).catch(reject);
        });
    }
}
