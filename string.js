//? Count how many times a string has the letter a

let str = "Erling Haaaaland";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a") {
    count++;
  }
}

console.log(count);

//? Count how many times a string has the letter a or A

let str2 = "Erling HAaaland";
let count2 = 0;

for (let i = 0; i < str2.length; i++) {
  if (str2[i] === "a" || str2[i] === "A") {
    count2++;
  }
}

console.log(count2);

//? Check whether a string contains all the vowels a, e, i, o, u
let str3 = "Checking whether a string cuntains all the vowels.";

let vowels = ["a", "e", "i", "o", "u"];

let containsAllVowels = true;

for (let i = 0; i < vowels.length; i++) {
  if (!str3.includes(vowels[i])) {
    containsAllVowels = false;
    break;
  }
}

console.log(containsAllVowels);

//? If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let inputString = "Hellox WorldX";
let outputString = "";

for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] === 'x') {
    outputString += 'y';
  } else if (inputString[i] === 'X') {
    outputString += 'Y';
  } else {
    outputString += inputString[i];
  }
}

console.log(outputString);

//? Capitalize Every first Letter of each word in a String

let inputString2 = "hello world";
let outputString2 = "";

let words = inputString2.split(" ");

for (let i = 0; i < words.length; i++) {
    outputString2 += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
}

console.log(outputString2.trim());
