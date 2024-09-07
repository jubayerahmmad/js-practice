// ?unit convertion
function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
console.log(inchToFeet(75));
console.log("--------------------------------");

function feetToInch(feet) {
  const inch = feet * 12;
  return inch;
}
console.log(feetToInch(7));
console.log("--------------------------------");

function feetToMeters(feet) {
  const meters = feet * 0.3048;
  return meters;
}
console.log(feetToMeters(7));
console.log("--------------------------------");

function metersToFeet(meters) {
  const feet = meters / 0.3048;
  return feet;
}

console.log(metersToFeet(20));
console.log("--------------------------------");

function kilometeresToMile(kilo) {
  const miles = kilo * 0.621371;
  return miles;
}

console.log(kilometeresToMile(10));
console.log("--------------------------------");

function mileToKilometers(miles) {
  const kilo = miles / 0.621371;
  return kilo;
}

console.log(mileToKilometers(5));
console.log("--------------------------------");

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(25));
console.log("--------------------------------");

function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

console.log(fahrenheitToCelsius(77));
console.log("--------------------------------");

//?odd average

// function findOddAverage(arr) {
//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       sum += arr[i];
//       count++;
//     }
//   }

//   if (count === 0) {
//     return "No odd numbers found in the array.";
//   }

//   const average = sum / count;
//   return average;
// }

// console.log(findOddAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 5.5
// console.log("--------------------------------");

function oddAvg(numbers) {
  let oddNum = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      oddNum.push(number);
    }
  }
  console.log(oddNum);
  let sum = 0;
  for (const odds of oddNum) {
    sum += odds;
  }
  const length = oddNum.length;
  console.log(sum);
  console.log(length);
  const avg = sum / length;
  return avg;
}

const numbers = [13, 20, 37, 47, 51, 64, 72];
const avg = oddAvg(numbers);
console.log("The average of odd numbers in the array is:", avg); // Output: 43.000000000000004
console.log("--------------------------------");

//?even average

function evenAvg(nums) {
  let evenNum = [];
  for (const num of nums) {
    if (num % 2 === 0) {
      evenNum.push(num);
    }
  }
  let sum = 0;
  for (const even of evenNum) {
    sum += even;
  }
  const length = evenNum.length;
  const avg = sum / length;
  return avg;
  // console.log(evenNum);
  // console.log(sum);
}

const nums = [44, 47, 68, 67, 10, 13, 74, 2];
const eAvg = evenAvg(nums);
console.log("evenNum average is", eAvg);
console.log("--------------------------------");

//? remove duplicate from array.

function removeDuplicates(arr) {
  let uniqueNums = [];
  for (const nums of arr) {
    // if (!uniqueNums.includes(nums)) {
    //   uniqueNums.push(nums);
    // }
    if (uniqueNums.includes(nums) === false) {
      uniqueNums.push(nums);
    }
  }
  return uniqueNums;
}

const arr = [44, 47, 55, 44, 21, 14, 55, 30, 21];
const noDupli = removeDuplicates(arr);

console.log("Array without duplicates:", noDupli);
console.log("--------------------------------");
