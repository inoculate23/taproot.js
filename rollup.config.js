import babel from '@rollup/plugin-babel';

export default {
    input: 'src/taproot.js',
    output: [
        {
            file: 'dist/taproot.esm.mjs',
            format: 'es',
        },
        {
            file: 'dist/taproot.umd.js',
            format: 'umd',
            name: 'taproot',
        },
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
    ]
};
