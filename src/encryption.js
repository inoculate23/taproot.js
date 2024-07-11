/** @module encryption */
import {
    hexStringToArrayBuffer,
    arrayBufferToHexString
} from "./helpers.js";

/**
 * A helper class for managing encryption between the client and server.
 */
export class Encryption {
    /**
     * Constructs the helper class.
     * @param {string} key - The encryption key.
     */
    constructor(key) {
        if (typeof key === "string") {
            const encoder = new TextEncoder();
            key = encoder.encode(key);
        } else if (!(key instanceof ArrayBuffer)) {
            throw new TypeError("Key must be a string or ArrayBuffer.");
        }
        this.key = key;
        this.importKeyPromise = Encryption.importAesKey(key);
    }

    /**
     * Get the encryption key.
     * @returns {Promise<CryptoKey>} The encryption key.
     */
    async getKey() {
        return await this.importKeyPromise;
    }

    /**
     * Import an AES key from raw bytes.
     *
     * @param {ArrayBuffer} rawKeyBytes - The raw key bytes. Should be 16 bytes (128 bits).
     * @returns {Promise<CryptoKey>} The imported key.
     */
    static async importAesKey(rawKeyBytes) {
        return await crypto.subtle.importKey(
            "raw",
            rawKeyBytes,
            { name: "AES-CTR", length: 128 },
            true, // extractable
            ["encrypt", "decrypt"]
        );
    }

    /**
     * Pack a nonce with its length, mirroring the Python implementation.
     *
     * @param {Uint8Array} nonce - The nonce to pack.
     * @returns {Uint8Array} The packed nonce.
     */
    static packNonce(nonce) {
        // nonce is a Uint8Array
        const nonceLen = nonce.length;
        const nonceLenBuffer = new ArrayBuffer(4);
        const nonceLenView = new DataView(nonceLenBuffer);
        nonceLenView.setUint32(0, nonceLen, true); // little-endian
        const combined = new Uint8Array(4 + nonceLen);
        combined.set(new Uint8Array(nonceLenBuffer), 0);
        combined.set(nonce, 4);
        return combined;
    }

    /**
     * Given a packed nonce and ciphertext, unpack them.
     *
     * @param {Uint8Array} data - The packed nonce and ciphertext.
     * @returns [{Uint8Array, Uint8Array}] The unpacked nonce and ciphertext.
     */
    static unpackNonceAndCiphertext(data) {
        // data is a Uint8Array
        const nonceLenView = new DataView(data.buffer, data.byteOffset, 4);
        const nonceLen = nonceLenView.getUint32(0, true);
        const nonce = data.slice(4, 4 + nonceLen);
        const ciphertext = data.slice(4 + nonceLen);
        return [ nonce, ciphertext ];
    }

    /**
     * Create a 16-byte counter block for AES-CTR mode.
     *
     * @param {Uint8Array} nonce - The nonce to use.
     * @returns {Uint8Array} The counter block.
     */
    static createCounterBlock(nonce) {
        // Create a 16-byte counter block:
        // First nonce.length bytes are the nonce.
        // The remaining bytes are zeroed and act as the counter.
        const counterBlock = new Uint8Array(16);
        counterBlock.set(nonce, 0);
        // The rest of the 16 bytes are zero, which is our initial counter
        return counterBlock;
    }

    /**
     * Encrypt plaintext using AES-CTR mode.
     *
     * @param {Uint8Array|string} plaintext - The plaintext to encrypt.
     * @returns {Promise<Uint8Array>} The encrypted data.
     */
    async encrypt(plaintext) {
        // plaintext can be a Uint8Array or string
        let plainBytes;
        if (typeof plaintext === "string") {
            plainBytes = new TextEncoder().encode(plaintext);
        } else {
            plainBytes = plaintext;
        }

        const key = await this.getKey();
        // Generate a nonce (e.g., 8 bytes)
        // const nonce = crypto.getRandomValues(new Uint8Array(8));
        const nonce = new Uint8Array([0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30, 0x30]);
        const counterBlock = Encryption.createCounterBlock(nonce);
        // length specifies how many bits of the block are incremented as a counter.
        // If nonce is 8 bytes, that leaves 8 bytes for counter, i.e. 64 bits.
        const algorithm = {
            name: "AES-CTR",
            counter: counterBlock,
            length: 64
        };
        // Encrypt the plaintext
        const ciphertext = new Uint8Array(
            await crypto.subtle.encrypt(algorithm, key, plainBytes)
        );
        // Construct output: 4-byte nonce length + nonce + ciphertext
        const output = new Uint8Array(4 + nonce.length + ciphertext.length);
        const packedNonce = Encryption.packNonce(nonce);
        output.set(packedNonce, 0);
        output.set(ciphertext, 4 + nonce.length);
        return output;
    }

    /**
     * Decrypt data using AES-CTR mode.
     * This doesn't normally need to be done on the client side, but it's included for completeness.
     *
     * @param {Uint8Array} data - The data to decrypt.
     * @returns {Promise<Uint8Array>} The decrypted data.
     */
    async decrypt(data, asString = false) {
        // data is a Uint8Array containing: [nonce_len][nonce][ciphertext]
        const key = await this.getKey();
        const [ nonce, ciphertext ] = Encryption.unpackNonceAndCiphertext(data);
        const counterBlock = Encryption.createCounterBlock(nonce);
        const algorithm = {
            name: "AES-CTR",
            counter: counterBlock,
            length: 64
        };
        const decrypted = new Uint8Array(
            await crypto.subtle.decrypt(algorithm, key, ciphertext)
        );

        if (asString) {
            return new TextDecoder().decode(decrypted);
        }
        return decrypted;
    }
}
