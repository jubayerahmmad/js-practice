function calculateTax(income, expenses) {
  const difference = income - expenses;
  const taxRate = difference * 0.2;
  if (income > 0 && expenses > 0 && income > expenses) {
    return taxRate;
  } else {
    return "Invalid Input";
  }
}

function sendNotification(email) {
  if (!email.includes("@") || email.includes("@@")) {
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
console.log(sendNotification("zubayer.as@gmail.com"));

function checkDigitsInName(names) {
  if (typeof names !== "string") {
    return "Invalid Input";
  }
  const namess = names.split("");
  for (const name of namess) {
    if (!isNaN(name)) {
      return true;
    }
  }
  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  if (obj.isFFamily === true) {
    score = 20;
  } else {
    score = 0;
  }

  if (obj.testScore > 50 || obj.schoolGrade > 30) {
    return false;
  }
  const finalScore = obj.testScore + obj.schoolGrade + score;

  if (finalScore >= 80) {
    return true;
  } else {
    return false;
  }
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
    return "Invalid Input";
  }

  let totalTime = 0;
  let time = 0;
  for (const times of waitingTimes) {
    totalTime += times;
    time++;
  }
  if (serialNumber <= waitingTimes.length) {
    return "Invalid Serial Number";
  }
  const averageTime = Math.round(totalTime / time);
  const remainingCandidates = serialNumber - waitingTimes.length - 1;
  const remainingTime = averageTime * remainingCandidates;
  return remainingTime;
}
