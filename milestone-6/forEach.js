// forEach:
// The forEach() method executes a provided function once for each array element.
// It does not create a new array and always returns undefined.
// It is used for iterating over an array and performing an action on each element.

const number = [1, 65, 71, 85, 41, 5, 26];
const result = number.forEach((n) => {
  console.log(n);
});

// map:
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// It returns a new array and does not modify the original array.
// It is used for transforming each element of an array and returning a new array with the transformed values.

const number1 = [1, 65, 71, 85, 41, 5, 26];
const result1 = number1.map((n) => {
  return n * 2;
});

// Difference between forEach() and map():
// - forEach() does not return anything (returns undefined)
// - map() returns a new array with the transformed values

// Example to illustrate the differences:
const numbers3 = [1, 2, 3, 4, 5];

// Using forEach()
const resultForEach = [];
numbers3.forEach((num) => {
  resultForEach.push(num * 2);
});

// Using map()
const resultMap = numbers3.map((num) => {
  return num * 2;
});

console.log("resultForEach:", resultForEach); // Output: [2, 4, 6, 8, 10]
console.log("resultMap:", resultMap); // Output: [2, 4, 6, 8, 10]

// Additional differences between forEach() and map():

// 1. Purpose:
// - forEach() is primarily used for executing a function on each array element without returning anything.
// - map() is used for transforming each element and creating a new array with the transformed values.

// 2. Chaining:
// - forEach() does not return a new array, so it cannot be chained with other array methods.
// - map() returns a new array, allowing for method chaining (e.g., map().filter().reduce()).

// 3. Performance:
// - forEach() may be slightly faster in some cases because it does not create a new array.
// - map() creates a new array, which may have a slight performance overhead.

// 4. Use cases:
// - forEach() is suitable for operations that do not require a new array, such as logging, updating external variables, or performing side effects.
// - map() is suitable for operations that require a new array with transformed values, such as converting data formats or applying calculations to each element.

// Example demonstrating chaining with map():
const numbers4 = [1, 2, 3, 4, 5];
const resultChained = numbers4.map((num) => num * 2).filter((num) => num > 5);
console.log("resultChained:", resultChained); // Output: [6, 8, 10]

// Example demonstrating performance difference:
const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1);

console.time("forEach");
largeArray.forEach((num) => {
  const result = num * 2;
});
console.timeEnd("forEach");

console.time("map");
const mappedArray = largeArray.map((num) => num * 2);
console.timeEnd("map");
