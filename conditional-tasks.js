// 1.BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

// - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
// - BMI < 18.5, you are underweight.
// - BMI >= 18.5 and BMI <=24.9, you are normal.
// - BMI >=25 and BMI <= 29.9, you are overweight.
// - Otherwise, you are obese.

const bmi = 28.5;

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal weight");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

// 2. Grade Calculator
// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59

const marks = 74;

if (marks >= 80 && marks <= 100) {
  console.log("Grade: A+");
} else if (marks >= 70 && marks < 80) {
  console.log("Grade: A");
} else if (marks >= 60 && marks < 70) {
  console.log("Grade: A-");
} else if (marks >= 50 && marks < 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: F");
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myScore = 14;
const myFriendScore = 51;
if (myScore >= 80) {
  if (myFriendScore >= 80) {
    console.log("Go for lunch with your friend");
  } else if (myFriendScore >= 60 && myFriendScore <= 80) {
    console.log("Good luck next time with your friend");
  } else if (myFriendScore >= 40 && myFriendScore <= 60) {
    console.log("Keep your friend's message unseen");
  } else {
    console.log("Block your friend");
  }
} else {
  console.log("Go to home and sleep and act sad");
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

const num1 = 10;
const num2 = 5;

let result;

if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}

console.log(result);

result = num1 > num2 ? num1 * 2 : num1 + num2;

console.log(result);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 19;
let ticketFare = 800;

if (age < 10) {
  console.log((ticketFare = 0));
} else if (age >= 10 && age <= 25) {
  console.log((ticketFare = 800 - 800 * 0.5));
} else if (age >= 60) {
  console.log((ticketFare = 800 - 800 * 0.15));
} else {
  console.log(ticketFare);
}
