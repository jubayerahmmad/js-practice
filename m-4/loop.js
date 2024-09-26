// let num = 1;
// while (num <= 60) {
//     console.log("I will invest at least 6 hrs every single day for next 60 days! with while loop", num);
//     num++;
// }

// for (let num = 1; num <= 60; num++) {
//     console.log("I will invest at least 6 hrs every single day for next 60 days! with for loop", num);
// }

//?finding odd numbers from 61-100.

// let oddNum = 61;
//* while (oddNum <= 100) {
//     if (oddNum % 2 !== 0) {
//         console.log("Odd number:", oddNum);
//     }
//     oddNum++;
// }

//* for (let oddNum = 61; oddNum <= 100; oddNum++) {
//   if (oddNum % 2 !== 0) {
//     console.log("Odd number:", oddNum);
//   }
// }

//?finding even numbers from 61-100.
// let evenNum = 60;
// *while (evenNum <= 100) {
//     if (evenNum % 2 == 0) {
//         console.log(evenNum);
//     }
//     evenNum++;
// }

//* for (let evenNum = 78; evenNum <= 98; evenNum++){
//     if (evenNum % 2 == 0) {
//         console.log(evenNum);
//     }
// }

//?sum of all odd numbers from 91-129.

// let sum = 0;
//* for (let oddNum = 91; oddNum <= 129; oddNum++) {
//   if (oddNum % 2 !== 0) {
//     sum += oddNum;
//     console.log(sum);
//   }
// }

// let sum = 0;
// let oddNum = 91;

//* while (oddNum <= 129) {
//     if (oddNum % 2 !== 0) {
//         sum += oddNum;
//         console.log(sum);
//     }
//     oddNum++;
// }

//?sum of all even numbers from 51-85.
// let sum = 0;
//* for (let evenNum = 51; evenNum <= 85; evenNum++) {
//     if (evenNum % 2 == 0) {
//         sum = sum + evenNum;
//         console.log(sum);
//     }
// }

// let sum = 0;
// let evenNum = 51;

//* while (evenNum <= 85) {
//   if (evenNum % 2 == 0) {
//     sum = sum + evenNum;
//     console.log(sum);
//   }
//   evenNum++;
// }

//? Generate a multiplication table for number 9

// let number = 9;
//* for (let multiply = 1; multiply <= 9; multiply++){
//     console.log(number * multiply);
// }

// let number = 9;
// let multiply = 1;

//* while (multiply <= 9) {
//   console.log(number * multiply);
//   multiply++;
// }

//? Implement a countdown timer that counts down from 81 to 65.

//* for (let countdown = 81; countdown >= 65; countdown--) {
//   console.log(countdown);
// }

// let countdown = 81;

//* while (countdown >= 65) {
//     console.log(countdown);
//     countdown--;
// }

//? Write a loop 1 to 200. Use break to exit the loop once you find 100.

// let num = 1;

//* while (num <= 200) {
//   if (num === 100) {
//     break;
//   }
//   console.log(num);
//   num++;
// }

// let num = 1;
//* for (let num = 0; num <= 200; num++) {
//   console.log(num);
//   if (num === 100) {
//     break;
//   }
// }

//? Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100

// let sum = 0;
//* for (let num = 1; num <= 100; num++) {
//     sum += num;
//     console.log(sum);
//     if (sum >= 100) {
//         break;
//     }
// }

// let num = 1;
// let sum = 0;
//* while (sum <= 100) {
//     sum += num;
//     console.log(sum);
//     num++;
//     if (sum >= 100) {
//         break;
//     }
// }

//? Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

//*  for (let num = 1; num <= 100; num++) {
//   for (let i = 1; i * i <= num; i++) {
//     if (i * i === num) {
//       console.log(num);
//       break;
//     }
//   }
// }

// let num = 1;

//* while (num <= 100) {
//   for (let i = 1; i * i <= num; i++) {
//     if (i * i === num) {
//       console.log(num);

//       break;
//     }
//   }

//   num++;
// }

//? Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

//*  for (let num = 1; num <= 40; num++){
//     if (num % 2 !== 0) {
//         continue;
//     }
//     console.log(num);
// }

// let num = 1;
//* while (num <= 40) {
//     if (num % 2 !== 0) {
//         num++;
//         continue;
//     }
//     console.log(num);
//     num++;
// }

//? display odd number from 55 to 85 and skip the numbers divisible by 5.

//* for (let num = 55; num <= 85; num++){
//     if (num % 2 !== 0) {
//         if (num % 5 === 0) {
//             continue;
//         }
//         console.log(num);
//     }
// }

let num = 55;
while (num <= 85) {
  if (num % 2 !== 0) {
      if (num % 5 == 0) {
        num++;
        continue;
    }
    console.log(num);
  }
  num++;
}
