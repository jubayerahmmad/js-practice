// Spread Operator:
// The spread operator is a feature in JavaScript that allows you to expand an array or an object into individual elements or properties.
// It is denoted by three dots (...).

const max = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(max);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maxNumber = Math.max(...numbers);
// console.log(maxNumber);

const products = [
  { name: "Product 1", price: 40 },
  { name: "Product 2", price: 60 },
  { name: "Product 3", price: 40 },
  { name: "Product 4", price: 84 },
  { name: "Product 5", price: 70 },
  { name: "Product 6", price: 64 },
  { name: "Product 7", price: 33 },
  { name: "Product 8", price: 85 },
  { name: "Product 9", price: 96 },
  { name: "Product 10", price: 18 },
];

const product = [...products].sort((a, b) => {
  return a.price - b.price;
});
console.log(product);
