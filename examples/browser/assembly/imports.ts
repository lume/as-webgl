/** 
 * Our JS Host imports, generally these go into ./imports.ts 
 * 
 * @author Kara Rawson <rawsonkara@gmail.com
 */

//@ts-ignore
@external("main", "sayHello")
declare function __hello(): void;

// @external("console", "log")
// declare function __log(msg: string): void

export { 
    __hello
    // ,
    // __log
}
