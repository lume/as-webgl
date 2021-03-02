import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from '../package.json';

/** Base configuration parameters */
const cfg = {
    inputFile: "src/index.ts",
    tsconfig: "config/tsconfig.json",
    sourceMap: true
}

/**
 * rollup configuration file which builds a commonjs, esm, and universal 
 * javascript module that will be consumed.
 * 
 * @author Kara Rawson <rawsonkara@gmail.com>
 */
export default [
    { // BROWSER JS MODULE (UMD)
        input: cfg.inputFile,
        plugins: [
            resolve({
                browser: true
            }),
            typescript({
                sourceMap: cfg.sourceMap,
                tsconfig: cfg.tsconfig
            })
        ],
        output: [{ 
            sourcemap: cfg.sourceMap,
            file: pkg.browser, 
            name: pkg.name, 
            format: 'umd'
        }]
    }, { // ESM JS BUNDLE 
        input: cfg.inputFile,
        plugins: [
            resolve({
                browser: true
            }),
            typescript({
                sourceMap: cfg.sourceMap,
                tsconfig: cfg.tsconfig
            })
        ],
        output: [{ 
            sourcemap: cfg.sourceMap,
            file: pkg.module, 
            name: pkg.name, 
            format: 'es'
        }]
    }, { // COMMON JS BUNDLE
        input: cfg.inputFile,
        plugins: [
            resolve({
                browser: true
            }),
            commonjs(),
            typescript({
                sourceMap: cfg.sourceMap,
                tsconfig: cfg.tsconfig
            })
        ],
        output: [{ 
            sourcemap: cfg.sourceMap,
            file: pkg.main, 
            name: pkg.name, 
            format: 'cjs'
        }]
    }
];