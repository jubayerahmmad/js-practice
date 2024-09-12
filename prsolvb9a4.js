//?  problem-1
function calculateMoney(tickets) {
  let perTicket = 120;
  let cost = 500 + 50 * 8;
  if (tickets < 0) {
    return "Invalid number of tickets. Please enter a positive integer.";
  }
  const remainingMoney = tickets * perTicket - cost;
  return remainingMoney;
}

const tickets = calculateMoney(1055);
console.log("Remaining money:", tickets);
console.log("----------------------------------------------------------------");

//? problem-2

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid Name";
  }
  let lastName = name[name.length - 1];
  // let lastName = name.slice(-1);
  if (["a", "y", "i", "e", "o", "u", "w"].includes(lastName.toLowerCase())) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

console.log(checkName("Jhankar"));
console.log("----------------------------------------------------------------");

//? problem - 3

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Input is not an array";
  }
  let number = [];
  for (const arr of array) {
    if (typeof arr === "number" && !isNaN(arr)) {
      number.push(arr);
    }
  }
  return number;
}
console.log(deleteInvalids(["1", { num: 2 }, NaN]));

console.log("----------------------------------------------------------------");

//? problem - 4

function password(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  if (
    obj.birthYear.toString().length != 4 ||
    obj.birthYear === undefined ||
    obj.name === undefined ||
    obj.siteName === undefined
  ) {
    return "Invalid Input";
  }
  let capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);

  const password = capitalSiteName + "#" + obj.name + "@" + obj.birthYear;
  return password;
}

const passObj = {
  name: "rahat",
  birthYear: 2001,
  siteName: "google",
};

console.log(password(passObj));

console.log("----------------------------------------------------------------");

//? problem - 5
