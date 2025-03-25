/** @module encoding */
import { NDArray } from "./ndarray.js";
import { encode } from "../node_modules/@msgpack/msgpack/encode.mjs";
import { decode } from "../node_modules/@msgpack/msgpack/decode.mjs";

/**
 * Gets the python type name for a given javascript type.
 *
 * @param {string} type - The javascript type.
 * @returns {string} The python type name.
 */
function getPythonTypeForJavascriptType(type) {
    switch (type) {
        case "Number":
            return "int";
        case "Boolean":
            return "bool";
        case "String":
            return "str";
        case "Array":
            return "list";
        case "Object":
            return "dict";
        case "ArrayBuffer":
        case "Blob":
            return "bytes";
        case "t":
            // This occurs after minification; we only have one
            // constructor that should ever come through here
            // that we care about so we default to it.
            return "ndarray";
        default:
            return type;
    }
}

/**
 * Gets the data from a blob.
 * @param {Blob} blob - The blob to get the data from.
 * @returns {Promise<Uint8Array>} The data from the blob.
 */
function getDataFromBlob(blob) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = () => {
            resolve(new Uint8Array(reader.result));
            reader.close();
        };
        reader.onerror = () => {
            reject(reader.error);
            reader.close();
        }
        reader.readAsArrayBuffer(blob);
    });
}

/**
 * Gets the type of an image.
 * @param {Image} image - The image to get the type of.
 * @returns {string} The type of the image.
 */
function getTypeFromImage(image) {
    let imageSource = image.src;
    if (imageSource) {
        if (imageSource.startsWith("data")) {
            return imageSource.split(";")[0].split(":")[1];
        } else if (imageSource.endsWith(".png")) {
            return "image/png";
        } else if (imageSource.endsWith(".jpg") || imageSource.endsWith(".jpeg")) {
            return "image/jpeg";
        } else if (imageSource.endsWith(".gif")) {
            return "image/gif";
        } else if (imageSource.endsWith(".bmp")) {
            return "image/bmp";
        } else {
            return "image/png";
        }
    }
}

/**
 * Packs a blob into an object.
 * @param {Blob} blob - The blob to pack.
 * @param {string} dataType - The type of the blob.
 * @returns {Object} The packed object.
 */
async function packBlob(blob, dataType = null) {
    const blobData = await getDataFromBlob(blob);
    return {
        "type": "bytes",
        "data": blobData,
        "dtype": blob.type
    };
}

/**
 * Packs an image into an object.
 * @param {Image} image - The image to pack.
 * @returns {Object} The packed object.
 */
function packImage(image) {
    return new Promise((resolve, reject) => {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        let imageType = getTypeFromImage(image);
        canvas.width = datum.width;
        canvas.height = datum.height;
        ctx.drawImage(datum, 0, 0);
        canvas.toBlob((blob) => {
            packBlob(blob, imageType).then(resolve).catch(reject);
        }, imageType);
    });
}

/**
 * A class for encoding and decoding data.
 *
 * @class
 */
export class Encoder {
    /**
     * Packs data of a supported type into an object.
     * Matches the schema of the python client, so it uses some python typenames.
     *
     * @param {any} data - The data to pack.
     * @returns {Object} The packed object.
     */
    static async pack(datum) {
        if (datum === null || datum === undefined) {
            return {"type": "null"};
        } else if (datum instanceof ArrayBuffer) {
            return {"type": "bytes", "data": new Uint8Array(datum)};
        } else if (datum instanceof Blob) {
            return await packBlob(datum);
        } else if (datum instanceof NDArray) {
            return datum.packed;
        } else if (NDArray.isTypedArray(datum)) {
            return (new NDArray(datum)).packed;
        } else if (typeof Image !== "undefined" && datum instanceof Image) {
            return await packImage(datum);
        } else if (typeof datum === "function") {
            return {
                "type": "type",
                "dtype": getPythonTypeForJavascriptType(datum.name)
            };
        } else if (typeof datum === "number") {
            // either a float or an integer
            return {
                "type": datum % 1 === 0 ? "int" : "float",
                "data": datum
            };
        } else if (typeof datum === "boolean") {
            return {
                "type": "bool",
                "data": datum
            };
        } else if (typeof datum === "string") {
            let utf8encoder = new TextEncoder("utf-8");
            return {
                "type": "str",
                "data": utf8encoder.encode(datum)
            };
        } else if (Array.isArray(datum)) {
            return {
                "type": "list",
                "items": await Promise.all(datum.map(Encoder.pack))
            };
        } else if (typeof datum === "object") {
            let keys = Object.keys(datum);
            let promises = [];
            for (let key in datum) {
                promises.push(Encoder.pack(datum[key]));
            }
            let values = await Promise.all(promises);
            let props = {};
            for (let i = 0; i < keys.length; i++) {
                props[keys[i]] = values[i];
            }
            return {
                "type": "dict",
                "props": props
            };
        } else {
            throw new Error('Unsupported datum type: ${typeof datum} (${datum.constructor.name})');
        }
    }

    /**
     * Unpack the packed data into the appropriate object.
     * Matches the schema of the python client.
     *
     * @param {Object} packed - The packed object to deserialize.
     * @returns {any} The deserialized data.
     * @throws {Error} If the data type is not supported.
     */
    static async unpack(packed) {
        return new Promise((resolve, reject) => {
            switch (packed.type) {
                case "null":
                    return resolve(null);
                case "int":
                case "float":
                case "bool":
                    return resolve(packed.data);
                case "bytes":
                    return resolve(packed.data.buffer);
                case "str":
                    let utf8decoder = new TextDecoder("utf-8");
                    return resolve(utf8decoder.decode(packed.data));
                case "list":
                    return Promise.all(packed.items.map(Encoder.unpack))
                        .then(resolve)
                        .catch(reject);
                case "dict":
                    let keys = [];
                    let promises = [];
                    for (let key in packed.props) {
                        keys.push(key);
                        promises.push(Encoder.unpack(packed.props[key]));
                    }
                    return Promise.all(promises).then((values) => {
                        let obj = {};
                        for (let i = 0; i < keys.length; i++) {
                            obj[keys[i]] = values[i];
                        }
                        resolve(obj);
                    }).catch(reject);
                case "ndarray":
                case "tensor":
                    return resolve(new NDArray(packed.data, packed.shape, packed.dtype));
                case "image":
                    if (typeof Image === "undefined") {
                        return reject(new Error("Image is not supported in this environment."));
                    }
                    const imageBlob = new Blob([packed.data], {type: `image/${packed.dtype}`});
                    const imageUrl = URL.createObjectURL(imageBlob);
                    const image = new Image();
                    image.addEventListener("load", () => {
                        resolve(image);
                    });
                    image.src = imageUrl;
                    return image;
                case "audio":
                    const audioBlob = new Blob([packed.data], {type: `audio/${packed.dtype}`});
                    const audioUrl = URL.createObjectURL(audioBlob);
                    const audio = new Audio();
                    audio.addEventListener("loadeddata", () => {
                        resolve(audio);
                    });
                    audio.src = audioUrl;
                    return audio;
                case "exception":
                    let exceptionUtf8Decoder = new TextDecoder("utf-8");
                    let exceptionMessage = exceptionUtf8Decoder.decode(packed.data);
                    return resolve(new Error(`${packed.dtype}: ${exceptionMessage}`));
                default:
                    console.error("Unhandled response type", packed);
                    reject(new Error(`Unsupported packed type: ${packed.type}`));
            }
        });
    }

    /**
     * Packs the data, then encodes it into a Uint8Array using MessagePack.
     * Requires the MessagePack library to be available.
     *
     * @param {any} data - The data to serialize.
     * @returns {Uint8Array} The packed and encoded data.
     */
    static async encode(data) {
        let packed = await Encoder.pack(data);
        return encode(packed);
    }

    /**
     * Decodes the packed data, then unpacks it.
     * Requires the MessagePack library to be available.
     *
     * @param {Uint8Array} packed - The packed and encoded data to deserialize.
     * @returns {any} The deserialized data.
     */
    static async decode(packed) {
        let message = decode(packed);
        return await Encoder.unpack(message);
    }
}
