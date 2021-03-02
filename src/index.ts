import { foobar } from './foobar'
export function foo(bar: string): string {
    return foobar(bar)
}

console.log(foo("bar"))