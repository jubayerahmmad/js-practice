// Spread Operator:
// The spread operator is a feature in JavaScript that allows you to expand an array or an object into individual elements or properties.
// It is denoted by three dots (...).

const max = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(max);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maxNumber = Math.max(...numbers);
console.log(maxNumber);
