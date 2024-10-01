//* JSON - JavaScript Object Notation
// JSON is a lightweight format for storing and transporting data.
// JSON is often used for web APIs.
// JSON is a text format that is completely language independent.
// JSON is a subset of JavaScript.
// JSON is a lightweight data interchange format.
// JSON is a text format that is completely language independent.
// JSON is a subset of JavaScript.
// JSON is a lightweight data interchange format.
// JSON is a key-value pair data structure.

const json = {
  name: "John",
  age: 30,
  city: "New York",
};

const strigifiedJson = JSON.stringify(json);
console.log(strigifiedJson);
console.log(JSON.parse(strigifiedJson));
