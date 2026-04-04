"use strict";
//! Union
function combine(a, b) {
    let result;
    if (typeof a === "number" && typeof b === "number") {
        result = a + b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
}
const sum = combine(10, 20);
console.log(sum);
const combineName = combine("Vishal ", "Gupta");
console.log(combineName);
//! Literal Types
function addNumbers(c, d, conversionType) {
    let result;
    if ((typeof c === "number" && typeof d === "number") ||
        conversionType === "as-number") {
        result = +c + +d;
    }
    else {
        result = c.toString() + d.toString();
    }
    return result;
}
const ans1 = addNumbers("10", "50", "as-number");
const ans2 = addNumbers("Aryan ", "Gupta", "as-string");
console.log(ans1, ans2);
