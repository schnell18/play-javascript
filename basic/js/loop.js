var myArray = [];

var i = 0;
while (i < 5) {
  myArray.push(i);
  i++;
}

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0532366543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  },
];

function lookupProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++ ) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || null;
    }
  }
  return null;
}
