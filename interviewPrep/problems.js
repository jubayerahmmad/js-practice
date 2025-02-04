//? 1. Reverse String
// Problem Statement:
// তোমাকে একটা string দেওয়া হবে। তোমাকে সেই string টা reverse করতে হবে এবং return করতে হবে।
// Example:
// Input: s = "hello"
// Output: "olleh"

// const str = "jubayer";
// // const reveredStr = str.split("").reverse().join("");  // reyabuj
// const reversedString = str.split("").reduce((reversed, char) => {
//   console.log("reversed", reversed);
//   console.log("chars", char);

//   const reversedStr = char + reversed;
//   return reversedStr;
// }, "");
// console.log(reversedString); // reyabuj

//? 2. Delete Greatest Value from Nested Arrays
// Problem Statement:
// তোমাকে একটা two-dimensional array দেওয়া হবে। তোমাকে প্রতিটা nested array থেকে সর্বোচ্চ সংখ্যাটি (greatest number) remove করতে হবে। Hint: প্রতিটি nested array থেকে maximum খুঁজে remove করো।
// Example:
// Input: arr = [[1, 5, 3], [8, 2, 6], [4, 5, 7]]
// Output: [[1, 3], [2, 6], [4, 7]]

// const arr = [
//   [1, 5, 3],
//   [8, 2, 6],
//   [4, 5, 7],
// ];
// for (let elements of arr) {
//   let greatest = -Infinity; //It's a value that is smaller than any other number, essentially the lowest possible value in JavaScript.
//   elements.map((el) => {
//     if (el > greatest) {
//       return (greatest = el);
//     }
//   });
//   const index = elements.indexOf(greatest); // get the index of greatest num
//   elements.splice(index, 1); // remove greatest num
// }
// console.log(arr); //[ [ 1, 3 ], [ 2, 6 ], [ 4, 5 ] ]

//? 4. Find Maximum Number in an Array
// Problem Statement:
// তোমাকে একটা number array দেওয়া হবে। তোমাকে সেই array থেকে সর্বোচ্চ সংখ্যাটি (maximum number) খুঁজে বের করতে হবে।
// Example:
// Input: nums = [10, 5, 8, 20, 3]
// Output: 20
// const nums = [21, 24, 20, 14, 65, 24, 7];
// let maxNum = -Infinity;
// nums.map((num) => {
//   if (num > maxNum) {
//     maxNum = num;
//   }
// });
// console.log(maxNum); // 65

// 5. Find Factorial of a Number
// Problem Statement:
// তোমাকে একটা positive number n দেওয়া হবে। তোমাকে n-এর factorial (n!) return করতে হবে। Hint: Recursion বা loop ব্যবহার করে n! = n * (n-1)! ফর্মুলা ফলো করো।
// Example:
// Input: n = 5
// Output: 120 (5! = 5 × 4 × 3 × 2 × 1)

function factorial(n) {
  console.log(n);
}
factorial(5);
