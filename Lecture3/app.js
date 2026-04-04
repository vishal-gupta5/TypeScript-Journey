"use strict";
//! Union
function combine(a, b) {
    let result;
    if (typeof a === "number" && typeof b === "number") {
        result = a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        result = a + b;
    }
    return result;
}
const sum = combine(10, 20);
console.log(sum);
const combineName = combine("Vishal ", "Gupta");
console.log(combineName);
