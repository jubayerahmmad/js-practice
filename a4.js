//? problem 1
function calculateTax(income, expenses) {
  const difference = income - expenses;
  const taxRate = difference * 0.2;
  if (income > 0 && expenses > 0 && income > expenses) {
    return taxRate;
  } else {
    return "Invalid Input";
  }
}
// console.log(calculateTax(1500, -1000));

//? problem 2
function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }
  if (typeof email === "string" && email.includes("@")) {
    const domain = email.split("@");
    const domainName = domain[0];
    const user = email.split("@");
    const userName = user[1];
    const notification = `${domainName} sent you an email from ${userName}`;
    return notification;
  }
}
// const email = "zubayer.ahmmad@gmail.com";
// console.log(sendNotification(email));

//? problem 3
function checkDigitsInName(string) {
  if (typeof string !== "string") {
    return "Invalid Input";
  }
  const names = string.split("");
  for (const name of names) {
    if (!isNaN(name)) {
      return true;
    }
  }
  return false;
}
// console.log(checkDigitsInName("Raj12"));

//? problem 4
function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  if (studentName.isFFamily === true) {
    score = 20;
  } else {
    score = 0;
  }

  const finalScore = studentName.testScore + studentName.schoolGrade + score;

  if (finalScore >= 80) {
    return true;
  } else {
    return false;
  }
}
// const studentName = "student";
// const studentName = {
//   name: "Rajib",
//   testScore: 47,
//   schoolGrade: 28,
//   isFFamily: true,
// };

// console.log(calculateFinalScore(studentName));

//? problem 5
function waitingTime(array, number) {
  if (!Array.isArray(array) || typeof number !== "number") {
    return "Invalid Input";
  }

  let totalTime = 0;
  let time = 0;
  for (const arr of array) {
    totalTime += arr;
    time++;
  }
  if (serial <= prevCandidatesTime.length) {
    return "Invalid Serial Number";
  }
  const averageTime = Math.round(totalTime / time);
  const remainingCandidates = serial - prevCandidatesTime.length - 1;
  const remainingTime = averageTime * remainingCandidates;
  return remainingTime;
}
// const prevCandidatesTime = [3, 5, 7, 11, 6];
// const serial = 10;

// console.log(waitingTime(prevCandidatesTime, serial));
