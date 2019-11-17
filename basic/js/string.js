const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;

const createPerson1 = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender
  }
};
const createPerson2 = (name, age, gender) => ({name, age, gender});
