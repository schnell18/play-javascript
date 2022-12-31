function factorial(n) {
    if (Number.isInteger(n)) {
        if (n === 0) return 1;
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n-1);
        }
        return factorial[n];
    }
    else {
        return NaN;
    }
}

console.log("factorial(11) => ".concat(factorial(11)));
console.log("factorial(8) => ".concat(factorial(8)));
console.log("factorial(5) => ".concat(factorial(5)));
