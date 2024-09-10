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
