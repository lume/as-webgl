/**
 * Our example API functions we export to the JS Host
 * 
 * @author Kara Rawson <rawsonkara@gmail.com
 */
export namespace example {
    /** adds two integer's together and returns its */
    export function __add(x: i32, y: i32): i32 {
        return addTwoNumbers(x, y)
    }

    // export declare function add(): void
}

/** internal function used by example module. */
function addTwoNumbers(x: i32, y: i32): i32 {
    return x + y
}