import {a,b,c} from "./module2"

export function subA(i : string ) {
    a(i)
    console.log("sub2  subA called: " + i);
}
export function subB(i : string ) {
    b(i)
    console.log("sub2  subB called: " + i);
}
export function subC(i : string ) {
    c(i)
    console.log("sub2  subC called: " + i);
}
