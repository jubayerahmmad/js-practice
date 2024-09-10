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
const email = "zubayer.ahmmad@gmail.com";
console.log(sendNotification(email));
