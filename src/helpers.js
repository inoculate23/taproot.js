/**
 * Check if an object is 'empty'.
 *
 * @param object $o The object to check.o
 * @return bool True if the object is empty.
 */
export let isEmpty = (o) => {
    return (
        o === null ||
        o === undefined ||
        o === '' ||
        o === 'null' ||
        (Array.isArray(o) && o.length === 0) ||
        (typeof o === 'object' &&
            o.constructor.name === 'Object' &&
            Object.getOwnPropertyNames(o).length === 0)
    );
};

/**
 * Generate a random UUID.
 *
 * @return string A random UUID.
 */
export let uuidv4 = () => {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

/**
 * Sleep for a given number of milliseconds.
 */
export let sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Merge multiple typed arrays into a single typed array.
 * Assumes that all the arrays are of the same type.
 *
 * @param {Array<TypedArray>} arrays - The arrays to merge. Any kind of typed array is allowed.
 * @returns {TypedArray} - The merged typed array.
 */
export let mergeTypedArrays = (arrays) => {
    let totalLength = arrays.reduce((acc, array) => acc + array.length, 0);
    let result = new arrays[0].constructor(totalLength);
    let offset = 0;
    arrays.forEach((array) => {
        result.set(array, offset);
        offset += array.length;
    });
    return result;
}

/**
 * Convert a hex string to an ArrayBuffer.
 *
 * @param {string} hexString - The hex string to convert.
 * @returns {ArrayBuffer} - The ArrayBuffer.
 */
export let hexStringToArrayBuffer = (hexString) => {
    // Remove non-hex characters and ensure even length
    hexString = hexString.replace(/[^0-9a-fA-F]/g, "");
    if (hexString.length % 2 !== 0) {
        hexString = "0" + hexString;
    }

    // Create a Uint8Array to store the bytes
    const byteArray = new Uint8Array(hexString.length / 2);

    // Populate the Uint8Array
    for (let i = 0; i < hexString.length; i += 2) {
        const hexPair = hexString.substring(i, i + 2);
        const byte = parseInt(hexPair, 16);
        byteArray[i / 2] = byte;
    }
    return byteArray.buffer;
}

/**
 * Convert an ArrayBuffer to a hex string.
 *
 * @param {ArrayBuffer} arrayBuffer - The ArrayBuffer to convert.
 * @returns {string} - The hex string.
 */
export let arrayBufferToHexString = (arrayBuffer) => {
    const byteArray = new Uint8Array(arrayBuffer);
    let hexString = "";
    byteArray.forEach(byte => {
        hexString += byte.toString(16).padStart(2, "0");
    });
    return hexString;
}
