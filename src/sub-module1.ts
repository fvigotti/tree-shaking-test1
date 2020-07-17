import {a,b,c} from "./module1"

export function subA(i : string ) {
    a(i)
    console.log("sub1  subA called: " + i);
}
export function subB(i : string ) {
    b(i)
    console.log("sub1  subB called: " + i);
}
export function subC(i : string ) {
    c(i)
    console.log("sub1  subC called: " + i);
}
