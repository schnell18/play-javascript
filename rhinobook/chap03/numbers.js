let x = 0.3 - 0.2;
let y = 0.2 - 0.1;
// x === y false
// x === 0.1 false
// y === 0.1 true

// BigInt introduced since ES2020, implemented by chrome, firefox, edge and node
// represents arbitary length integer

console.log(2n ** 131071n - 1n);
console.log(BigInt(Number.MAX_SAFE_INTEGER));
let str = "1" + "0".repeat(100);
console.log(BigInt(str))
