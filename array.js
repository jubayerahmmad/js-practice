// task1
const fruits = ["banana", "apple", "orange", "guava"];
console.log(fruits[3]);

fruits[2] = "jambura";
console.log(fruits);

// task2
const touristSpot = ["koshkobajar", "rangamati", "sajek", "sylhet"];
touristSpot.push("oshtrolia");

console.log(touristSpot);
touristSpot.push("bandarban", "sundarban");
console.log(touristSpot);
touristSpot.pop();
console.log(touristSpot);

// task3
const books = ["bangla", "inreji", "goonit", "spanish"];

console.log(books.includes("spanish"));

// task4
const balsal = "ahg hsha yhuga";

console.log(Array.isArray(books));
console.log(Array.isArray(fruits));
console.log(Array.isArray(touristSpot));
console.log(Array.isArray(balsal));

// task5
const numbers = ["1", "2", "3", "4", "5"];
const boooks = ["bangla", "inreji", "goonit"];

console.log(numbers.concat(boooks));
