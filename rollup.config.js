import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
module.exports = {
    input: ['./src/index.js'],
    output: [
        {
            file: 'lib/thinkingdata.min.js',
            format: 'iife',  
            name: 'thinkingdata',
        },
        {
            file: 'lib/thinkingdata.umd.min.js',
            format: 'umd',
            name: 'thinkingdata',
        }
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
    ]
}