// 快速增加
// 快速增加
// 快速增加
// 快速增加
// 快速增加
class DefaultMap extends Map {
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue;
    }

    get(key) {
        if (this.has(key)) {
            return super.get(key);
        }
        else {
            return this.defaultValue;
        }
    }
}

class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0);
        this.totalLetters = 0;
    }

    add(text) {
        text = text.replace(/\s/g, "").toUpperCase();
        for(let ch of text) {
            let count = this.letterCounts.get(ch);
            this.letterCounts.set(ch, count + 1);
            this.totalLetters ++;
        }
    }

    toString() {
        let entries = [...this.letterCounts];

        entries.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1;
            }
            else {
                return b[1] - a[1];
            }
        });

        for (let entry of entries) {
            entry[1] = 100 * entry[1] / this.totalLetters;
        }

        entries = entries.filter(entry => entry[1] >= 1);
        let lines = entries.map(
            ([l,n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
        );

        return lines.join("\n");
    }
}

async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8");
    let histogram = new Histogram();
    for await (let chunk of process.stdin) {
        histogram.add(chunk);
    }
    return histogram
}

histogramFromStdin().then(histogram => { console.log(histogram.toString()); });
