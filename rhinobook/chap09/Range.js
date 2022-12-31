class Range {
    from = 0;
    to = 0;
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    static #integerRangePattern = /^\((\d+)\.\.\.(\d+)\)$/;

    static parse(s) {
        let matches = s.match(this.#integerRangePattern);
        if (!matches) {
            throw new TypeError(`Cannot parse Range from "${s}".`);
        }
        return new Range(parseInt(matches[1]),parseInt(matches[2]));
    }

    // get from() { return this.from; }
    // get to() { return this.to; }

    includes(x) {
        return this.from <= x && x <= this.to;
    }

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }

    toString() {
        return `(${this.from}...${this.to})`
    }
}

r = new Range(2, 10);
console.log("6 includes in Range(2, 10) eval to: ".concat(r.includes(6)));
console.log("r.toString() => ".concat(r.toString()));
console.log("[...r] => ".concat([...r]));
console.log("import.meta.url =>".concat(import.meta.url));
