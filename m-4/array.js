//? task1
// const fruits = ["banana", "apple", "orange", "guava"];
// console.log(fruits[3]);

// fruits[2] = "jambura";
// console.log(fruits);

//? task2
// const touristSpot = ["koshkobajar", "rangamati", "sajek", "sylhet"];
// touristSpot.push("oshtrolia");

// console.log(touristSpot);
// touristSpot.push("bandarban", "sundarban");
// console.log(touristSpot);
// touristSpot.pop();
// console.log(touristSpot);

//? task3
// const books = ["bangla", "inreji", "goonit", "spanish"];

// console.log(books.includes("spanish"));

//? task4
// const balsal = "ahg hsha yhuga";

// console.log(Array.isArray(books));
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(touristSpot));
// console.log(Array.isArray(balsal));

//? task5
// const numbers = ["1", "2", "3", "4", "5"];
// const boooks = ["bangla", "inreji", "goonit"];

// console.log(numbers.concat(boooks));

// reversing array

// const numbers2 = ["1", "2", "3", "4", "5"];
// console.log(numbers2);
// numbers2.reverse();
// console.log(numbers2);

//? Write a JavaScript code to reverse the array colors without using the reverse method.

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// let reversedColors = [];
//* for (let i = 0; i < colors.length; i++){
//     reversedColors.unshift(colors[i]);
//     console.log(reversedColors);
// }

// let i = 0;
//* while (i < colors.length) {
//     reversedColors.unshift(colors[i]);
//     i++;
//     console.log(reversedColors);
// }

// ?Write a JavaScript code to get the even numbers from an array using any looping technique.

// const numbers = [12, 98, 5, 41, 23, 78, 46];

// let evenNumbers = [];
//* for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 == 0) {
//         evenNumbers.push(numbers[i]);
//         console.log(evenNumbers);
//     }
// }

// let i = 0;
//* while (i < numbers.length) {
//     if (numbers[i] % 2 == 0) {
//         evenNumbers.push(numbers[i]);
//         console.log(evenNumbers);
//     }
//     i++;
// }

//? Use a for...of loop to concatenate all the elements of an array into a single string. output will be 'TomTimTinTik'.

// var numbers = ["Tom", "Tim", "Tin", "Tik"];
// var result = "";

// for (let number of numbers) {
//   result += number;
//   console.log(result);
// }


//? Reverse the words of a sentence. Only the position of the word will be reversed.

const statement = 'I am a hard working person';
const words = statement.split(' ');
const reversedWords = words.reverse().join(' ');
console.log(reversedWords);
