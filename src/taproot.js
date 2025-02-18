/** @module taproot */
import { IDTrackingClient } from "./client.js";
import { NDArray } from "./ndarray.js";
import { Session } from "./session.js";
import { MutexLock } from "./mutex.js";
import { uuidv4, isEmpty } from "./helpers.js";

const session = Session.getScope("taproot");

/**
 * Gets the metadata for a single datum.
 *
 * @param {any} datum - The datum to get metadata for.
 * @returns {Object} The metadata for the datum.
 */
function getMetadatum(datum = null) {
    if (datum === null || datum === undefined) {
        return {"type": "NoneType"};
    }
    let metadata = {
        "parameter_type": datum.constructor,
        "parameter_size": 1
    }
    if (typeof Blob !== "undefined" && datum instanceof Blob) {
        metadata.parameter_type = "bytes";
        metadata.parameter_size = datum.size;
    } else if (datum instanceof NDArray) {
        metadata["parameter_size"] = datum.shape;
        //metadata["parameter_sub_metadata"] = getMetadatum(datum.data[0]);
    } else if(NDArray.isTypedArray(datum)) {
        datum = new NDArray(datum);
        metadata["parameter_type"] = NDArray;
        metadata["parameter_size"] = datum.shape;
        //metadata["parameter_sub_metadata"] = getMetadatum(datum.data[0]);
    } else if (typeof Image !== "undefined" && datum instanceof Image) {
        metadata["parameter_size"] = [datum.width, datum.height];
    } else if (Array.isArray(datum)) {
        metadata["parameter_size"] = [datum.length];
        metadata["parameter_sub_metadata"] = getMetadatum(datum[0]);
    } else if (metadata["parameter_type"] === Object) {
        metadata["parameter_size"] = Object.keys(datum).length;
        metadata["parameter_sub_metadata"] = {};
        for (let key in datum) {
            metadata["parameter_sub_metadata"][key] = getMetadatum(datum[key]);
        }
    } else if (datum.length !== undefined) {
        metadata["parameter_size"] = datum.length;
    }
    return metadata;
}

/**
 * Gets the metadata for a dictionary of data.
 *
 * @param {Object} data - The data to get metadata for.
 * @returns {Object} The metadata for the data.
 */
function getMetadata(data) {
    let metadata = {};
    for (let key in data) {
        metadata[key] = getMetadatum(data[key]);
    }
    return metadata;
}

/**
 * A client for the Taproot backend.
 *
 * @class
 */
export class Taproot extends IDTrackingClient {
    /**
     * Gets the address of the overseer with the protocol and port.
     *
     * @returns {string} The address of the overseer.
     */
    get completeAddress() {
        if (this.hasProtocol) {
            return this.address;
        }

        // Using relative address, so we need to determine the protocol and port from the current page.
        if (typeof window !== "undefined" && window.location !== undefined) {
            let targetAddress = window.location.href;
            if (this.isWebsocket) {
                targetAddress = targetAddress.replace("http://", "ws://").replace("https://", "wss://");
            }
            if (!targetAddress.endsWith("/")) {
                if (window.location.href === window.location.origin) {
                    // Add a slash
                    targetAddress += "/";
                } else {
                    // If the target address is not a directory, we want to trim to the directory.
                    // e.g. ws://example.com/file/index.html -> ws://example.com/file/
                    let lastSlash = targetAddress.lastIndexOf("/");
                    targetAddress = targetAddress.substring(0, lastSlash + 1);
                }
            }
            if (this.address.startsWith("/")) {
                return `${targetAddress}${this.address.substring(1)}`;
            }
            return `${targetAddress}${this.address}`;
        }
        return this.address; // Final fallback in non-browser environments.
    }

    /**
     * Gets the client ID, will be set once per session.
     *
     * @returns {string} The client ID.
     */
    get clientId() {
        let sessionClientId = session.getItem("clientId");
        if (sessionClientId) {
            return sessionClientId;
        }
        let newClientId = uuidv4();
        session.setItem("clientId", newClientId);
        return newClientId;
    }

    /**
     * Creates a new Taproot client.
     *
     * @param {string} address - The address of the Taproot server. Either ws://, wss://, http://, or https://.
     * @returns {Tap} The Taproot client.
     */
    getClient(address) {
        if (this.executors === null || this.executors === undefined) {
            this.executors = {};
        }
        if (this.isWebsocket && !this.addressHasProtocol(address)) {
            if (address.startsWith("/")) {
                address = address.substring(1);
            }
            if (this.hostname !== null) {
                if (this.isSecure) {
                    address = `wss://${this.hostname}/${address}`;
                } else {
                    address = `ws://${this.hostname}/${address}`;
                }
            } else {
                if (this.isSecure) {
                    address = `wss://${address}`;
                } else {
                    address = `ws://${address}`;
                }
            }
        }
        if (this.executors[address] === null || this.executors[address] === undefined) {
            if (this.debug) {
                console.log(`Creating new client for ${address}`);
            }
            this.executors[address] = new IDTrackingClient(address, this.debug);
        }
        return this.executors[address];
    }

    /**
     * Removes a client from the client cache.
     *
     * @param {string} task - The task to remove the client for.
     * @param {string} model - The model to remove the client for.
     */
    clearClientForTask(task, model = null) {
        if (this.tasks === null || this.tasks === undefined) {
            this.tasks = {};
        }
        if (this.tasks[task] === null || this.tasks[task] === undefined) {
            this.tasks[task] = {};
        }
        if (model === null || model === undefined) {
            model = "default";
        }
        if (this.tasks[task][model] !== null && this.tasks[task][model] !== undefined) {
            this.tasks[task][model].close();
        }
        this.tasks[task][model] = null;
    }

    /**
     * Sets a client for a task.
     *
     * @param {IDTrackingClient} client - The client to set.
     * @param {string} task - The task to set the client for.
     * @param {string} model - The model to set the client for.
     */
    setClientForTask(client, task, model = null) {
        if (this.tasks === null || this.tasks === undefined) {
            this.tasks = {};
        }
        if (this.tasks[task] === null || this.tasks[task] === undefined) {
            this.tasks[task] = {};
        }
        if (model === null || model === undefined) {
            model = "default";
        }
        this.tasks[task][model] = client;
    }

    /**
     * Gets a client for a task.
     * 
     * @param {string} task - The task to get the client for.
     * @param {string} model - The model to get the client for.
     * @returns {IDTrackingClient} The client for the task. Null if not found.
     */
    getClientForTask(task, model = null) {
        if (this.tasks === null || this.tasks === undefined) {
            this.tasks = {};
        }
        if (this.tasks[task] === null || this.tasks[task] === undefined) {
            this.tasks[task] = {};
        }
        if (model === null || model === undefined) {
            model = "default";
        }
        if (this.tasks[task][model] !== null && this.tasks[task][model] !== undefined) {
            return this.tasks[task][model];
        }
        return null;
    }

    /**
     * Gets a lock for a task.
     *
     * @param {string} task - The task to get the lock for.
     * @param {string} model - The model to get the lock for.
     * @returns {MutexLock} The lock for the task.
     */
    getLockForTask(task, model = null) {
        if (this.locks === null || this.locks === undefined) {
            this.locks = {};
        }
        if (this.locks[task] === null || this.locks[task] === undefined) {
            this.locks[task] = {};
        }
        if (model === null || model === undefined) {
            model = "default";
        }
        if (this.locks[task][model] === null || this.locks[task][model] === undefined) {
            this.locks[task][model] = new MutexLock();
        }
        return this.locks[task][model];
    }

    /**
     * Sends a task invocation to the server.
     *
     * @param {object} Payload - the payload to the server.
     * @returns {Promise} The promise that resolves when the task is complete.
     */
    sendInvocation(payload, options) {
        options = options || {};

        let task = payload.task;
        let model = payload.model || null;
        let continuation = payload.continuation;

        let sequenceNumber = 0;
        let fetchIntermediates = options.fetchIntermediates;
        let pollingInterval = options.pollingInterval || 1000;
        let retryDelay = options.retryDelay || 20;
        let onIntermediateResult = options.onIntermediateResult || ((result, sequence) => console.log("Ignored intermediate result", sequence, result));
        let onInterimResult = options.onInterimResult || ((result, sequence) => console.log("Ignored interim result", sequence, result));

        if (isEmpty(task)) {
            throw new Error("Task is required.");
        }

        return new Promise((resolve, reject) => {
            // Set payload overrides
            payload.id = uuidv4();
            payload.client_id = this.clientId;
            payload.overseer = this.completeAddress;
            payload.return_metadata = true;
            payload.wait_for_result = !fetchIntermediates;

            // Either get the client for the task or create a new one.
            let client = this.getClientForTask(task, model);
            // Define the method for following a continuation. This will switch from one executor to another,
            // then recursively follow from there if necessary.
            let followContinuation = (continuation, retries = 3) => {
                return new Promise((resolve, reject) => {
                    let continuationId = continuation.id;
                    let continuationAddress = continuation.address;
                    let continuationClient = this.getClient(continuationAddress);
                    // Method to request updates from the continuation.
                    // Either needs to be called only once (if we're waiting for the final result,
                    // i.e., not fetching intermediates) or called repeatedly (if we're fetching intermediates).
                    let sendContinuationUpdateRequest = () => continuationClient.send({
                        "id": continuationId,
                        "client_id": this.clientId,
                        "return_metadata": true,
                        "wait_for_result": !fetchIntermediates,
                    });
                    // Error and message handlers for the continuation client.
                    let onContinuationError = (error) => {
                        continuationClient.offError(onContinuationError);
                        continuationClient.offMessage(onContinuationMessage);
                        if (retry) {
                            followContinuation(continuation, false).then(resolve).catch(reject);
                        } else {
                            console.error("Error with continuation", continuationId, "from", continuationAddress, error);
                            reject(error);
                        }
                    };
                    let onContinuationMessage = (message) => {
                        if (message instanceof Error) {
                            continuationClient.offMessage(onContinuationMessage);
                            continuationClient.offError(onContinuationError);
                            if (retries > 0) {
                                // It's possible that the executor hasn't received the full payload yet from the previous executor.
                                setTimeout(() => {
                                    followContinuation(continuation, retries-1).then(resolve).catch(reject);
                                }, retryDelay);
                            } else {
                                console.error("Error with continuation", continuationId, "from", continuationAddress, message);
                                reject(message);
                            }
                        } else if (message.id == continuationId) {
                            if (["error", "complete"].includes(message.status)) {
                                // Continuation is complete, so we can resolve with the result.
                                continuationClient.offMessage(onContinuationMessage);
                                continuationClient.offError(onContinuationError);
                                if (message.status === "error") {
                                    reject(message.result);
                                } else if (!!message.continuation) {
                                    // One or more continuations requested - follow them.
                                    onInterimResult(message.result, sequenceNumber);
                                    sequenceNumber++;
                                    let continuations = message.continuation;
                                    let returnFirst = false;
                                    if (!Array.isArray(continuations)) {
                                        continuations = [continuations];
                                        returnFirst = true;
                                    }
                                    let continuationPromises = [];
                                    for (let continuation of continuations) {
                                        continuationPromises.push(followContinuation(continuation));
                                    }
                                    Promise.all(continuationPromises).then((results) => {
                                        if (returnFirst) {
                                            resolve(results[0]);
                                        } else {
                                            resolve(results);
                                        }
                                    }).catch(reject);
                                } else {
                                    resolve(message.result);
                                }
                            } else {
                                if (!isEmpty(message.intermediate)) {
                                    onIntermediateResult(message.intermediate, sequenceNumber);
                                }
                                // Trigger the next update request.
                                setTimeout(sendContinuationUpdateRequest, pollingInterval);
                            }
                        }
                    };
                    continuationClient.onMessage(onContinuationMessage);
                    continuationClient.onError(onContinuationError);
                    sendContinuationUpdateRequest();
                });
            };
            // Define an update request for easy usage.
            let sendUpdateRequest = () => client.send({
                "id": payload.id,
                "client_id": this.clientId,
                "return_metadata": true,
                "wait_for_result": !fetchIntermediates,
            });
            // This handler fires when a response is received, either an intermediate status, error or result.
            let onMessage = (message) => {
                if (message.id === payload.id) {
                    if (["error", "complete"].includes(message.status)) {
                        // Execution is complete.
                        client.offMessage(onMessage);
                        client.offError(onError);
                        if (!!continuation) {
                            onInterimResult(message.result, sequenceNumber);
                            sequenceNumber++;
                            if (!message.continuation || !message.continuation.id) {
                                reject("Continuation request but not found in message");
                            } else {
                                let continuations = message.continuation;
                                let returnFirst = false;
                                if (!Array.isArray(continuations)) {
                                    continuations = [continuations];
                                    returnFirst = true;
                                }
                                let continuationPromises = [];
                                for (let continuation of continuations) {
                                    continuationPromises.push(followContinuation(continuation));
                                }
                                Promise.all(continuationPromises).then((results) => {
                                    if (returnFirst) {
                                        resolve(results[0]);
                                    } else {
                                        resolve(results);
                                    }
                                }).catch(reject);
                            }
                        } else {
                            resolve(message.result);
                        }
                    } else {
                        // Execution still in progress.
                        if (!isEmpty(message.intermediate)) {
                            onIntermediateResult(message.intermediate, sequenceNumber);
                        }
                        // Trigger the next update request.
                        setTimeout(sendUpdateRequest, pollingInterval);
                    }
                }
            };
            let onError = (error) => {
                client.offMessage(onMessage);
                client.offError(onError);
                reject(error);
            };
            let data = payload.parameters;
            if (client === null) {
                // If the client is null, we need to get a new address for this task. Ask the overseer where it is.
                // We only send metadata to the overseer, not the actual data.
                payload.parameters = getMetadata(data);
                this.send(payload).then((executor) => {
                    if (!executor.address) {
                        reject("No address found for executor.");
                        return;
                    } else if (
                        executor.address.startsWith("tcp://") ||
                        executor.address.startsWith("tcps://") ||
                        executor.address.startsWith("unix://")
                    ) {
                        reject(`Executor is not configured for websocket or HTTP communication, received: ${executor.address}`);
                        return;
                    }
                    payload.parameters = data;
                    client = this.getClient(executor.address);
                    client.onMessage(onMessage);
                    client.onError(onError);
                    client.send(payload, false);
                    this.setClientForTask(client, task, model);
                }).catch(reject);
            } else {
                // We've already received an address for this task, so we try to re-use it.
                if (this.debug) {
                    console.log("Reusing client for task", task);
                }
                // On error with this client, we retry the task with a new client. This only happens once.
                let onErrorRetry = (error) => {
                    client.offMessage(onMessage);
                    client.offError(onErrorRetry);
                    this.clearClientForTask(task, model);
                    this.sendInvocation(payload, options).then((result) => {
                        resolve(result);
                    }).catch((newError) => {
                        reject(newError);
                    });
                };
                // Send the actual data to the client.
                payload.parameters = data;
                client.onMessage(onMessage);
                client.onError(onErrorRetry);
                client.send(payload, false);
            }
        });
    }

    /**
     * Sends a task invocation to the server.
     *
     * @param {object} Payload - the payload to the server.
     * @returns {Promise} The promise that resolves when the task is complete.
     */
    invoke(payload, options) {
        let task = payload.task;
        let model = payload.model || null;
        if (isEmpty(task)) {
            throw new Error("Task is required.");
        }
        return new Promise((resolve, reject) => {
            this.getLockForTask(task, model).acquire().then((release) => {
                return this.sendInvocation(payload, options).then((result) => {
                    release();
                    resolve(result);
                }).catch((error) => {
                    release();
                    reject(error);
                });
            });
        });
    }

    /**
     * Extend the close method to close all clients.
     */
    close() {
        for (let task in this.tasks) {
            for (let model in this.tasks[task]) {
                this.clearClientForTask(task, model);
            }
        }
        super.close();
    }
}

if (typeof window !== "undefined") {
    window.Taproot = Taproot;
}
