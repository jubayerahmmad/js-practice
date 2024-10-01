const products = [
  {
    id: 1,
    name: "lenovo laptop",
    price: 65000,
  },
  {
    id: 2,
    name: "mac book air",
    price: 85000,
  },
  {
    id: 3,
    name: "mac book pro",
    price: 150000,
  },
  {
    id: 4,
    name: "hp",
    price: 45000,
  },
];

// using map
const names = products.map((n) => n.name);
console.log(names);

// using forEach
const names1 = products.forEach((n) => n.id);
console.log(names1); //returns undefined

// using filter
const expensive = products.filter((p) => p.price > 70000);
console.log(expensive);

// using find
const affordable = products.find((aff) => aff.price < 50000);
console.log(affordable);

// using reduce
const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalPrice);
