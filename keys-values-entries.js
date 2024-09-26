const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//? Difference between Object.keys(), Object.values(), and Object.entries():
// Object.keys():
// - Returns an array of a given object's own enumerable property names.
// - Does not include inherited properties.
// - Useful for getting all property names in an object.

// Object.values():
// - Returns an array of a given object's own enumerable property values.
// - Does not include inherited properties.
// - Useful for getting all property values in an object.

// Object.entries():
// - Returns an array of a given object's own enumerable property [key, value] pairs.
// - Does not include inherited properties.
// - Useful for getting all properties (including both keys and values) in an object.
