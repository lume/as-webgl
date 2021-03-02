import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from '../package.json';

/**
 * rollup configuration file which builds a commonjs, esm, and universal 
 * javascript module that will be consumed.
 * 
 * @author Kara Rawson <rawsonkara@gmail.com>
 */
export default [
    {
        input: 'src/index.ts',
        plugins: [
            resolve({
                browser: true
            }),
            typescript({
                sourceMap: true,
                tsconfig: "config/tsconfig.json",
                module: ""
            })
        ],
        output: [{ 
            sourcemap: true,
            file: "lib/as-webgl.umd.js", 
            name: pkg.name, 
            format: 'umd'
        }]
    }//,
    // {
    //     input: 'src/index.ts',
    //     plugins: [
    //         resolve({
    //             browser: true
    //         }),
    //         commonjs(),
    //         typescript({
    //             sourceMap: true,
    //             tsconfig: "config/tsconfig.json"
    //         })
    //     ],
    //     output: [{ 
    //         file: pkg.main, 
    //         name: pkg.name, 
    //         format: 'cjs', 
    //         sourcemap: true 
    //     }]
    // },
    // {
    //     input: 'src/index.ts',
    //     plugins: [
    //         resolve({
    //             browser: true
    //         }),
    //         typescript({
    //             sourceMap: true,
    //             tsconfig: "config/tsconfig.json"
    //         })
    //     ],
    //     output: [{ 
    //         file: pkg.module, 
    //         name: pkg.name, 
    //         format: 'es', 
    //         sourcemap: true 
    //     }]
    // }
];