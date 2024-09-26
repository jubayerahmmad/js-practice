// Filter:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// It returns a new array and does not modify the original array.
// It is used for filtering elements of an array based on a condition.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const age = [41, 45, 42, 44, 65, 64];
const oddNumbers = age.filter((a) => a % 2 !== 0);
console.log(oddNumbers);

const friends = [
  "haaland",
  "Casado",
  "lewy",
  "hansi",
  "flick",
  "lamine",
  "pena",
  "doku",
];
const oddFriends = friends.filter((f) => f.length > 4);
const evenFriends = friends.filter((f) => f.length <= 4);
console.log(oddFriends);
console.log(evenFriends);

// find:
// The find() method returns the first element in the provided array that satisfies the provided testing function.
// It returns the value of the first element that passes the test. Otherwise it returns undefined.
// It is used for finding a single element in an array that matches a specific condition.

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = numbers1.find((num) => num % 2 === 0);
console.log(evenNumber);

// Difference between find() and filter():

// 1. Return value:
// - find() returns the first element that satisfies the condition
// - filter() returns an array of all elements that satisfy the condition

// 2. Number of elements returned:
// - find() returns at most one element (or undefined if no match).
// - filter() can return multiple elements in an array (if no match then returns empty array).

// 3. Behavior when no match is found:
// - find() returns undefined
// - filter() returns an empty array

// Example to illustrate the differences:
const numbers2 = [1, 3, 5, 7, 8, 9, 10, 12];

// Using find()
const firstEven = numbers2.find((num) => num % 2 === 0);
console.log("First even number (find):", firstEven); // Output: 8

// Using filter()
const allEven = numbers2.filter((num) => num % 2 === 0);
console.log("All even numbers (filter):", allEven); // Output: [8, 10, 12]

// No match scenario
const bigNumber = numbers2.find((num) => num > 100);
console.log("Number > 100 (find):", bigNumber); // Output: undefined

const bigNumbers = numbers2.filter((num) => num > 100);
console.log("Numbers > 100 (filter):", bigNumbers); // Output: []
