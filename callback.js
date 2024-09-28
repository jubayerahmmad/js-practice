// callback:
// A callback is a function that is passed as an argument to another function and is executed inside that function.
// Callbacks are used to handle asynchronous operations, event handling, and to manage code flow.
// They allow for code reusability and modularity.

// Example of a callback:
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched successfully");
  }, 2000);
}

// Usage:
// fetchData((data) => {
//   console.log(data);
// });

// Callback Hell:
// Callback hell is a situation where multiple nested callbacks are used, making the code difficult to read and maintain.
// It occurs when dealing with asynchronous operations that depend on the results of previous operations.
// Callback hell can be mitigated using Promises, async/await, and modularization.

// Example of callback hell:
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched successfully");
  }, 2000);
}

// Usage:
// fetchData((data) => {
//   console.log(data);
// });
