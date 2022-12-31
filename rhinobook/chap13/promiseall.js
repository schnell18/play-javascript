Promise.allSettled([
    Promise.resolve(1),
    Promise.reject(new Error("404 not found")),
    "hello",
]).then(results => {
    console.log("results[0] => ".concat(results[0]));
    console.log("results[1] => ".concat(results[1]));
    console.log("results[2] => ".concat(results[2]));
});
