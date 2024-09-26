//data access

const data = [
  { id: 1, name: "John", address: "123 Main St" },
  { id: 2, name: "Jane", address: "456 Main St" },
];

console.log(data[1].name);
console.log("-----------");

const products = {
  count: 40,
  data: [
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
  ],
};
console.log(products.data[1].price);
console.log("-----------");

//nested object
const user = [
  {
    id: 1,
    name: "sam",
    address: {
      street: [
        {
          first: "123 Main St",
          second: "456 Main St",
        },
      ],
      city: "New York",
      country: "USA",
    },
  },
  {
    id: 2,
    name: "tom",
    address: {
      street: [
        {
          first: "789 Main St",
          second: "101 Main St",
        },
      ],
      city: "London",
      country: "UK",
    },
  },
];

console.log(user[1].address.street[0].second);
