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
console.log(calculateTax(1500, -1000));
