/**
 * The module entrypoint used by the loader
 * 
 * @author Kara Rawson <rawsonkara@gmail.com
 */

export * from "./example"
export * from "./imports"

import { example } from "./example"
import { __hello } from "./imports"

/** 
 * loader entry point for our module that is called automatically. This
 * function gets called first.
 */
export function _start(): void {
  __hello();            // makes callback to js host (from imports)
  // example.add()
  example.__add(19, 21)  // call our export function internally
}
