/**
 * A simple example that loads a WebGL program that  using AssemblyScript 
 * to compile our runtime WebAssembly. 
 * 
 * @author Kara Rawson <rawsonkara@gmail.com
 */

// import loader from "@assemblyscript/loader"
import loader from "./node_modules/@assemblyscript/loader/index.js"; // or require

/** Our compiled AssemblyScript WebAssembly file*/
const wasmFile = "build/module.wasm"

/**
 * typically we can store our import tables into another file 
 * that gets imports with our loader. The `index` is the name of your 
 * Assembly entry point file, this is the default namespace
 */
const main = {
    sayHello() {
        console.log("Hello from WebAssembly!");
    }
}

/**
 * Our WebAssembly runtime environment functions. These are included when
 * setting `exportRuntime` flag in the compiler. These get overriden with
 * your own functions. Another way to think of this as hooks into your
 * internal web assembly program during runtime.
 */
const env = {
    /** called if the assembly wasm crashes */
    abort(_msg, _file, line, column) {
        console.error("abort called at main.ts:" + line + ":" + column);
    }
}

/** called after we load our wasm binary */
const start = ({ exports }) => {            // loader's instantiate callback                    
    module.exports = exports                // reference --exportRuntime
    /// ... 
    module.exports._start()                 // start our wasm example module

    console.log(module)

    // test some our module exports
    document.getElementById("container").textContent =  // our html elem
        "Answer to the Universe: " +
         module.exports.example.__add(19, 23);          // test our exports
}

/** Our WebAssembly object for the loader */
const module = {
    file: fetch(wasmFile),   // load file buffer as Promise
    exports: {},             // our runtime exports from loader 
    imports: {               // import libraries for loader
        main,                // 
        env
    },
    start: start
}

/** execute our WebAssembly module binary */
loader                      // our AssemblyScript loader
    .instantiate(           // creates our web assembly
        module.file,        // file or string buffer
        module.imports)     // example module imports
    .then(module.start)              // run with exports