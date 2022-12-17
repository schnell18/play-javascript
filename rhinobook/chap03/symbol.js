let strname = "String name";
let symname = Symbol("String name");
console.log(typeof(strname));
console.log(typeof(symname));
let o = {};
o[strname]= 1;
o[symname]= 2;
console.log("o[strname]=".concat(o[strname]));
console.log("o[symname]=".concat(o[symname]));

let s = Symbol.for("shared");
let t = Symbol.for("shared");
console.log("t === s => ".concat(t === s));
console.log("s.toString = ".concat(s.toString()));


