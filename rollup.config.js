import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image'
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';

export default {
    input: './src/lib/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'esm'
        }
    ],
    plugins: [
        external(),
        postcss(),
        resolve({
            extensions: ['.jsx', '.js', '.json']
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react']
        }),
        commonjs(),
        image(),
        visualizer(),
        svgr(),
        url()
    ],
    external: ['styled-components'],
    globals: { 'styled-components': 'styled' }
};