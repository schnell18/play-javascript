uniqInt.counter = 1;

function uniqInt() {
    return uniqInt.counter ++;
}


// use closure to safe-guard the counter
let uniqInt2 = (function() {
    let i = 1;
    return function() {
        return i++;
    }
}());

console.log("uniqInt() => ".concat(uniqInt()));
console.log("uniqInt() => ".concat(uniqInt()));
console.log("uniqInt() => ".concat(uniqInt()));
console.log("uniqInt() => ".concat(uniqInt()));
console.log("uniqInt() => ".concat(uniqInt()));

console.log("uniqInt2() => ".concat(uniqInt2()));
console.log("uniqInt2() => ".concat(uniqInt2()));
console.log("uniqInt2() => ".concat(uniqInt2()));
console.log("uniqInt2() => ".concat(uniqInt2()));
console.log("uniqInt2() => ".concat(uniqInt2()));
