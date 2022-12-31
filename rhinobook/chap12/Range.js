class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    has(x) {
        return typeof x === 'number' && this.from <= x && x <= this.to;
    }

    toString() {
        reutrn `{ x | ${this.from} <= x <= ${this.to} }`;
    }

    *[Symbol.iterator]() {
        for (let i = Math.ceil(this.from); i <= this.to; i++) {
            yield(i);
        }
    }

    // [Symbol.iterator]() {
    //     let next = Math.ceil(this.from);
    //     let last = this.to;

    //     return {
    //         next() {
    //             return (next <= last) ? { value: next++ } : { done: true };
    //         },

    //         [Symbol.iterator]() { return this; }
    //     }
    // }
}

for (let x of new Range(1, 100)) {
    console.log(x);
}
