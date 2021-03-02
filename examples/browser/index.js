/**
 * Our direct relative reference to the loader for use by `live-server. When
 * using WebPack you can call with `@assemblyscript/loader` becuase it is bundled
 * with your web app.
 */
import loader from "./node_modules/@assemblyscript/loader/index.js"; // or require

/**
 * typically we can store our import tables into another file 
 * that gets imports with our loader. The `index` is the name of your 
 * Assembly entry point file, this is the default namespace
 */
const index = {
    sayHello() {
        console.log("Hello from WebAssembly!");
    }
}

const env = {
    abort(_msg, _file, line, column) {
        console.error("abort called at index.ts:" + line + ":" + column);
    }
}


/** Our WebAssembly object for the loader */
const wasm = {
    file: fetch("build/index.wasm"),
    exports: {},
    imports: {
        index,
        env
    }
}

/** called after we load our wasm binary */
const run = ({ exports }) => {
    // save our export references
    wasm.exports = exports
    // test our exports
    document.getElementById("container").textContent =
        "Answer to the Universe: " + exports.add(19, 23);

    // inspecta' deck
    console.log(wasm)
}

/** execute our WebAssembly binary */
loader
    .instantiate(
        wasm.file,
        wasm.imports)
    .then(run)