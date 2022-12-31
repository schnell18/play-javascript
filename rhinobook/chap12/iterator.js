// Iterator explained
let iterable = [..."hello universe"];

console.log("Iterate use for/of...");
for (let result of iterable) {
    console.log(result);
}


console.log("Iterate use raw iterator...");
let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value);
}
