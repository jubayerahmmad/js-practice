// closure:
// A closure is a function that has access to variables in its outer (enclosing) lexical scope,
// even after the outer function has returned. It consists of:
// 1. The function itself
// 2. The environment in which the function was created
// Closures allow for data privacy, creating function factories, and maintaining state.
// They are a powerful feature in JavaScript for creating modular and reusable code.

// Example of a closure:
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// Usage:
// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2

function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
const watch1 = stopWatch();
console.log(watch1());
