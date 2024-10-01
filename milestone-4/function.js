// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

multiply(4, 5, 8, 2);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function changeNumber(num) {
  if (num % 2 !== 0) {
    return num * 2;
  } else {
    return num / 2;
  }
}

console.log(changeNumber(3)); // Output: 6

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function makeAvg() {
  let sum = 0;
  let args = Array.from(arguments);
  let size = args.length;

  for (let i = 0; i < size; i++) {
    sum += args[i];
  }

  return sum / size;
}

console.log(makeAvg(1, 2, 3, 4, 5)); // Output: 3

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function countZero(binaryStr) {
  let count = 0;

  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === "0") {
      count++;
    }
  }

  return count;
}

console.log(countZero("1101011000"));

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function oddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(oddEven(5)); // Output: Odd
