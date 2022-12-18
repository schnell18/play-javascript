let maxWidth = 0;
let preferences = { maxWidth: 0 };
let max = maxWidth || preferences.maxWidth || 500;
console.log("Using || => ".concat(max));
// ?? requires ES2020
// it is syntax error use ?? and || at the same w/o parenthesis
// max = maxWidth ?? preferences.maxWidth || 500;
max = maxWidth ?? preferences.maxWidth ?? 500;
console.log("Using ?? => ".concat(max));
