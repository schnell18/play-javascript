let s1 = "caf\u{e9}"
console.log("s1 = ".concat(s1))
let s2 = "cafe\u{301}"
console.log("s2 = ".concat(s2))
console.log("s1 === s2 => ".concat(s1 === s2))
s2 = s2.normalize("NFC");
console.log("s1 === s2 => ".concat(s1 === s2))

