
let o = {};
Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true,
});

//Object.defineProperty(o, "x", { writable: false });
Object.defineProperty(o, "x", { value: 2 });
Object.defineProperty(o, "x", { get: function() { return 100; }});

let p = Object.defineProperties({}, {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 1, writable: true, enumerable: true, configurable: true },
    r: {
        get() { return Math.sqrt(this.x ** 2 + this.y ** 2); },
        enumerable: true,
        configurable: true
    }
});
p.r
