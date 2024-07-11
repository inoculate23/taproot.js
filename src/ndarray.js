/** @module NDArray */
/**
 * A class representing a multi-dimensional array.
 * Provides basic operations for manipulating the array,
 * made to mirror numpy's NDArray in feel (but not overall functionality.)
 *
 * @class
 */
export class NDArray {
    /**
     * Create a new NDArray
     *
     * @param {number[]} data - The data of the array
     * @param {number[]} shape - The shape of the array
     * @constructor
     */
    constructor(data, shape = null, dtype = null) {
        if (data instanceof NDArray) {
            this.data = data.data;
            this.shape = data.shape;
            this.dtype = data.dtype;
        } else if (NDArray.isTypedArray(data)) {
            let currentDataType = NDArray.getDataTypeFromTypedArray(data);
            if (dtype !== null && currentDataType !== dtype) {
                this.data = new (NDArray.getArrayConstructorFromDataType(dtype))(
                    data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)
                );
                this.dtype = dtype;
            } else {
                this.data = data;
                this.dtype = currentDataType;
            }
            if (shape === null) {
                shape = [data.length];
            }
            this.shape = shape;
        } else if (dtype !== null) {
            this.data = new (NDArray.getArrayConstructorFromDataType(dtype))(data);
            if (shape === null) {
                shape = [data.length];
            }
            this.shape = shape;
            this.dtype = dtype;
        } else if (Array.isArray(data)) {
            // Guess int32
            this.data = new Int32Array(data);
            this.shape = [data.length];
            this.dtype = 'int32';
        } else {
            throw new Error(`Invalid data type ${typeof data} (${data.constructor.name})`);
        }
    }

    /**
     * Gets a singular item from the array using one or more indexes.
     *
     * @param {number[]} indexes - The indexes to get the value at
     * @returns {number} The value at the given indexes
     * @throws {Error} If the number of indexes is incorrect
     */
    get() {
        let indexes = Array.from(arguments);
        if (indexes.length !== this.shape.length) {
            throw new Error('Incorrect number of indexes');
        }
        let index = 0;
        for (let i = 0; i < indexes.length; i++) {
            index += indexes[i] * this.strides[i];
        }
        return this.data[index];
    }

    /**
     * Sets a singular item in the array using one or more indexes.
     *
     * @param {number} value - The value to set
     * @param {number[]} indexes - The indexes to set the value at
     * @returns {void}
     * @throws {Error} If the number of indexes is incorrect
     */
    set() {
        let indexes = Array.from(arguments);
        let value = indexes.pop();
        if (indexes.length !== this.shape.length) {
            throw new Error('Incorrect number of indexes');
        }
        let index = 0;
        for (let i = 0; i < indexes.length; i++) {
            index += indexes[i] * this.strides[i];
        }
        this.data[index] = value;
    }

    /**
     * Gets the data packed for sending over the network.
     *
     * @returns {Object} The packed data
     */
    get packed() {
        return {
            "type": "ndarray",
            "shape": this.shape,
            "dtype": this.dtype,
            "data": this.data
        }
    }

    /**
     * Gets the data in an ImageData object.
     *
     * @returns {ImageData} The image data
     * @throws {Error} If the array is not 3D
     */
    get imageData() {
        if (this.shape.length !== 3) {
            throw new Error('Can only get ImageData from 3D array (height, width, channels)');
        }
        // We need four channel input - check if it's three. If so, interleave with 255
        let [height, width, channels] = this.shape;
        if (channels === 3) {
            let data = new Uint8ClampedArray(width * height * 4);
            for (let i = 0; i < width * height; i++) {
                data[i * 4] = this.data[i * 3];
                data[i * 4 + 1] = this.data[i * 3 + 1];
                data[i * 4 + 2] = this.data[i * 3 + 2];
                data[i * 4 + 3] = 255;
            }
            return new ImageData(data, width, height);
        }
        return new ImageData(
            new Uint8ClampedArray(
                this.data.buffer.slice(
                    this.data.byteOffset,
                    this.data.byteOffset + this.data.byteLength
                )
            ),
            width,
            height
        );
    }

    /**
     * Gets the data type from a typed array
     *
     * @param {TypedArray} typedArray - The typed array to get the data type from
     * @returns {string} The data type of the typed array
     * @throws {Error} If the input is not a typed array
     */
    static getDataTypeFromTypedArray(typedArray) {
        if (NDArray.isTypedArray(typedArray)) {
            return typedArray.constructor.name.replace('Array', '').toLowerCase();
        }
        throw new Error(`Not a typed array: ${typedArray.constructor.name}`);
    }

    /**
     * Gets the constructor for a typed array from a data type
     *
     * @param {string} dataType - The data type to get the constructor for
     * @returns {TypedArray} The constructor for the typed array
     * @throws {Error} If the data type is not recognized
     */
    static getArrayConstructorFromDataType(dataType) {
        switch (dataType) {
            case 'float32':
                return Float32Array;
            case 'float64':
                return Float64Array;
            case 'int8':
                return Int8Array;
            case 'int16':
                return Int16Array;
            case 'int32':
                return Int32Array;
            case 'uint8':
                return Uint8Array;
            case 'uint16':
                return Uint16Array;
            case 'uint32':
                return Uint32Array;
            default:
                throw new Error(`Unknown data type: ${dataType}`);
        }
    }

    /**
     * Checks if an object is a typed array
     *
     * @param {Object} obj - The object to check
     * @returns {boolean} Whether the object is a typed array
     */
    static isTypedArray(obj) {
        return (
            obj instanceof Float32Array ||
            obj instanceof Float64Array ||
            obj instanceof Int8Array ||
            obj instanceof Int16Array ||
            obj instanceof Int32Array ||
            obj instanceof Uint8Array ||
            obj instanceof Uint16Array ||
            obj instanceof Uint32Array
        );
    }

    /**
     * Gets a string representation of the array
     *
     * @returns {string} The string representation of the array
     */
    toString() {
        return `NDArray(${this.data}, ${this.shape}, ${this.dtype})`;
    }
}
