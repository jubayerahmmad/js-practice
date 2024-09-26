// Map: create a new array by performing some operation on each element of the original array.loops through each element of the array and returns a new array.
// Map also:
// 1. Transforms each element: Applies a function to each element, creating a new array with the results.
// 2. Preserves array length: The resulting array has the same number of elements as the original.
// 3. Doesn't modify original: Creates a new array, leaving the original unchanged.
// 4. Can access index and array: The callback function can receive the current index and the entire array as additional parameters.
// 5. Works with various data types: Can be used with arrays of numbers, strings, objects, or mixed types.

// Example demonstrating these features:

//* const originalArray = [1, 2, 3, 4, 5];
//* const transformedArray = originalArray.map((num, index, arr) => {
//*   console.log(`Processing element at index ${index} of array: [${arr}]`);
//*   return {
//*     original: num,
//*     doubled: num * 2,
//*     isEven: num % 2 === 0,
//*   };
//* });

//* console.log("Original array:", originalArray);
//* console.log("Transformed array:", transformedArray);

const numbers = [1, 2, 3, 4, 44, 58];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

const nums = [1, 5, 3, 4, 8];
const doble = nums.map((nums) => nums * 2);
console.log(doble);
