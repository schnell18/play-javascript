let stmt = `"She said 'hi'", he said.`;
console.log(stmt);

let multiline = `
Little things

Little drops of water,
Little grains of sand,
Make the might ocean,
And the pleasant land.

Little deeds of kindness,
Little words of love,
Make our earth an eden,
Like the heaven above.
`;

let python_motto = `
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
`
console.log(multiline);
console.log(python_motto);

let s = "Hello, universe";

console.log(s.substring(1,4));
console.log(s.slice(1,4));
console.log(s.slice(-3));
console.log(s.split(", "));

console.log(s.indexOf("l"));
console.log(s.indexOf("l", 3));
console.log(s.indexOf("zz"));
console.log(s.lastIndexOf("l"));

console.log(s.startsWith("Hell"));
console.log(s.endsWith("!"));
console.log(s.includes("iv"));

console.log(s.replace("llo", "ya"));
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.normalize());
console.log(s.normalize("NFD"));

console.log(s.charAt(0));
console.log(s.charAt(s.length-1));
console.log("x".padStart(5, "*"));
console.log(" test  ".trim());
console.log(" test  ".trimStart());
console.log(" test  ".trimEnd());

console.log(s.concat("!"));
console.log(s[0]);
console.log(s[s.length-1]);
console.log(" <>  ".repeat(5));

// tagged template literal
console.log(String.raw`\n`.length);
