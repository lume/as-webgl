import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from '../package.json';

const cfg = {
    input: "src/index.ts",
    tsconfig: "config/tsconfig.json"
}

/**
 * rollup configuration file which builds a commonjs, esm, and universal 
 * javascript module that will be consumed.
 * 
 * @author Kara Rawson <rawsonkara@gmail.com>
 */
export default [
    { // BROWSER JS MODULE (UMD)
        input: 'src/index.ts',
        plugins: [
            resolve({
                browser: true
            }),
            typescript({
                sourceMap: true,
                tsconfig: "config/tsconfig.json"
            })
        ],
        output: [{ 
            sourcemap: true,
            file: pkg.browser, 
            name: pkg.name, 
            format: 'umd'
        }]
    }, { // ESM JS BUNDLE 
        input: 'src/index.ts',
        plugins: [
            resolve({
                browser: true
            }),
            typescript({
                sourceMap: true,
                tsconfig: "config/tsconfig.json"
            })
        ],
        output: [{ 
            sourcemap: true,
            file: pkg.module, 
            name: pkg.name, 
            format: 'es'
        }]
    }, { // COMMON JS BUNDLE
        input: 'src/index.ts',
        plugins: [
            resolve({
                browser: true
            }),
            commonjs(),
            typescript({
                sourceMap: true,
                tsconfig: "config/tsconfig.json"
            })
        ],
        output: [{ 
            sourcemap: true,
            file: pkg.main, 
            name: pkg.name, 
            format: 'cjs'
        }]
    }
];