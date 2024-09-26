// reduce:
// - It is used to reduce an array to a single value
// - It takes a callback function and an initial value as arguments
// - The callback function takes two arguments: the accumulator and the current value
// - The accumulator is the result of the previous callback function
// - The current value is the current element in the array
// - The initial value is the value of the accumulator when the first callback function is called
// - It returns the final value of the accumulator

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
