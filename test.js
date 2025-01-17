/****
 * test.js
 ****/

const ws = require("ws");
globalThis.WebSocket = ws;
const crypto = require("crypto");
globalThis.crypto = crypto;
const { JSDOM } = require("jsdom");
const { window } = new JSDOM();
globalThis.FileReader = window.FileReader;
globalThis.Blob = window.Blob;
globalThis.File = window.File;

// Test values for various types
const testValues = [{
        label: "Integer",
        value: 42
    },
    {
        label: "Boolean true",
        value: true
    },
    {
        label: "Boolean false",
        value: false
    },
    {
        label: "String",
        value: "Hello, Taproot!"
    },
    {
        label: "Blob",
        value: new Blob(["Taproot blob test"], {
            type: "text/plain"
        })
    },
    {
        label: "Array of Mixed Types",
        value: [123, true, "Nested hello", [1, 2], {
            a: 1,
            b: false
        }]
    },
    {
        label: "Nested Object",
        value: {
            foo: "bar",
            arr: [1, 2, {
                deeper: [true, false, 3, "string"]
            }],
            num: 999
        }
    }
];

/**
 * Deep-compare original vs. echoed to verify correctness.
 * Special handling for ArrayBuffer/Blob; naive check for everything else.
 */
async function deepEqual(original, echoed) {
    // 1) ArrayBuffer
    if (original instanceof ArrayBuffer && echoed instanceof ArrayBuffer) {
        if (original.byteLength !== echoed.byteLength) return false;
        const view1 = new Uint8Array(original);
        const view2 = new Uint8Array(echoed);
        for (let i = 0; i < view1.length; i++) {
            if (view1[i] !== view2[i]) return false;
        }
        return true;
    }

    // 2) Blob
    if (typeof Blob !== 'undefined' && original instanceof Blob && echoed instanceof Blob) {
        // Read both as ArrayBuffer
        const [origBuf, echoBuf] = await Promise.all([
            original.arrayBuffer(),
            echoed.arrayBuffer()
        ]);
        // Compare lengths
        if (origBuf.byteLength !== echoBuf.byteLength) return false;
        // Compare each byte
        const origView = new Uint8Array(origBuf);
        const echoView = new Uint8Array(echoBuf);
        for (let i = 0; i < origView.length; i++) {
            if (origView[i] !== echoView[i]) {
                return false;
            }
        }
        return true;
    }

    // 3) Arrays
    if (Array.isArray(original) && Array.isArray(echoed)) {
        if (original.length !== echoed.length) return false;
        for (let i = 0; i < original.length; i++) {
            if (!(await deepEqual(original[i], echoed[i]))) {
                return false;
            }
        }
        return true;
    }

    // 4) Objects
    if (original && typeof original === "object" && echoed && typeof echoed === "object") {
        const keys1 = Object.keys(original).sort();
        const keys2 = Object.keys(echoed).sort();
        if (keys1.length !== keys2.length) return false;
        for (let i = 0; i < keys1.length; i++) {
            if (keys1[i] !== keys2[i]) return false;
        }
        for (let key of keys1) {
            if (!(await deepEqual(original[key], echoed[key]))) {
                return false;
            }
        }
        return true;
    }

    // 5) Primitives (number, boolean, string, null, undefined)
    return original === echoed;
}

/**
 * Test routine to check each type, logging pass/fail for each item.
 */
async function runTaprootTests(TaprootClass, artifactName) {

    for (let overseerUrl of ["ws://127.0.0.1:32189", "http://127.0.0.1:32190"]) {
        console.log(`\n=== Testing ${artifactName} at ${overseerUrl} ===`);
        const taproot = new TaprootClass(overseerUrl);

        // Wait for WebSocket open or any "ready" if needed
        for (let {label, value} of testValues) {
            try {
                const startTime = Date.now();
                const echoedValue = await taproot.invoke({
                    task: "echo",
                    parameters: {
                        message: value
                    }
                });
                const durationMilliseconds = Date.now() - startTime;

                const passed = await deepEqual(value, echoedValue);
                console.log(`[${artifactName} - ${label}] ${passed ? "PASS" : "FAIL"} in ${durationMilliseconds}ms`);
                if (!passed) {
                    console.error("  Original:", value);
                    console.error("  Echoed:  ", echoedValue);
                }
            } catch (err) {
                console.error(`[${artifactName} - ${label}] ERROR`, err);
            }
        }

        taproot.close();
    }
}

/**
 * Main entry point: dynamically import or require each artifact.
 */
(async function main() {
    try {
        // 1) ESM artifact
        const esmModule = await import("./dist/taproot.esm.mjs");
        await runTaprootTests(esmModule.Taproot, "taproot.esm.mjs");
    } catch (err) {
        console.error("Error testing taproot.esm.mjs:", err);
    }

    try {
        // 2) Minified artifact
        const minModule = require("./dist/taproot.min.js");
        await runTaprootTests(minModule.Taproot, "taproot.min.js");
    } catch (err) {
        console.error("Error testing taproot.min.js:", err);
    }

    try {
        // 3) UMD artifact
        const umdModule = require("./dist/taproot.umd.js");
        await runTaprootTests(umdModule.Taproot, "taproot.umd.js");
    } catch (err) {
        console.error("Error testing taproot.umd.js:", err);
    }

    // Wait a moment to inspect open handles
    console.log("\nAll tests complete.\n");
})();
