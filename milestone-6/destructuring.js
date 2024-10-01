// Destructuring is a JavaScript feature that allows you to extract values from arrays or objects and assign them to variables.

// object destructuring
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, age, city } = person;

console.log(name, age, city);

//array destructuring
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, third, ...rest] = numbers;

console.log(first, second, third, rest);

//function destructuring
const person2 = {
  name: "John",
  age: 30,
  city: "New York",
};

const printPerson = ({ name, age, city }) => {
  console.log(name, age, city);
};

printPerson(person2);

//nested object destructuring
const person3 = {
  name: "John",
  age: 30,
  city: "New York",
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

const {
  address: { street, city: city2, country },
} = person3;

console.log(street, city2, country);

// nested
let students = {
  details: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: [
      { "building no": 12 },
      { street: "St. Jonson" },
      { city: "Petersburg" },
      { country: "UK" },
    ],
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: [
      { "building no": 18 },
      { street: "St. Lucia" },
      { city: "Johannesburg" },
      { country: "USA" },
    ],
  },
};
const {
  details: {
    address: [, , , country1],
  },
} = students;
console.log("53", country1);

//swapping variables
let a = 12,
  b = 3;
[a, b] = [b, a];

console.log("a", a, "b", b);

//adding new properties to object
const obj = { foo: 1 };
obj.bar = 2;
console.log(obj);
