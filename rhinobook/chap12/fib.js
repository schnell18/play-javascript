function* fibonacciSequence() {
    let x = 0n, y = 1n;
    for(;;) {
        yield(y);
        [x, y] = [y, x+y];
    }
}

function fibonacci(n) {
    for(let f of fibonacciSequence()) {
        if (n-- <=0) return f;
    }
}

function* take(n, iterable) {
    let it = iterable[Symbol.iterator]();
    while(n-- >0) {
        let elem = it.next();
        if (elem.done) return;
        else yield elem.value;
    }
}

console.log("fibonacci(20n) => ".concat(fibonacci(20n)));
console.log("fibonacci(200n) => ".concat(fibonacci(200n)));
console.log("fibonacci(1200n) => ".concat(fibonacci(1200n)));
console.log("fibonacci(1200) => ".concat(fibonacci(1200)));
console.log("fibonacci(11200n) => ".concat(fibonacci(11200n)));
console.log("fibonacci(11200) => ".concat(fibonacci(11200)));
console.log("[...take(10, fibonacciSequence())] => ".concat([...take(10, fibonacciSequence())]));
console.log("[...take(20, fibonacciSequence())] => ".concat([...take(20, fibonacciSequence())]));

