// Explore varargs function
"use strict";

// use of `arguments` is deprecated in favor of rest arg
function max(x) {
    let maxVal = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxVal) maxVal = arguments[i];
    }
    return maxVal;
}

function max2(...vals) {
    let maxVal = -Infinity;
    for(let i = 0; i < vals.length; i++) {
        if (vals[i] > maxVal) maxVal = vals[i];
    }
    return maxVal;
}

console.log("max(1, 34, 3, 1003, 34234, 12343, 123) is: ".concat(max(1, 34, 3, 1003, 34234, 12343, 123)));
console.log("max2(1, 34, 3, 1003, 34234, 12343, 123) is: ".concat(max2(1, 34, 3, 1003, 34234, 12343, 123)));
