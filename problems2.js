//? Find the max number in an array
const numbers = [77, 58, 94, 66, 28, 36, 88, 64, 99];

function getMax(numbers) {
  let max = numbers[0];
  for (const nums of numbers) {
    if (nums > max) {
      max = nums;
    }
  }
  return max;
}

const max = getMax(numbers);

console.log("The maximum number in the array is:", max); // Output: 99

//? Find the min number in an array
function getMin(numbers) {
  let min = numbers[0];
  for (const nums of numbers) {
    if (nums < min) {
      min = nums;
    }
  }
  return min;
}

const min = getMin(numbers);

console.log("The minimum number in the array is:", min); // Output: 28
console.log("--------------------------------");

//? multiplicatons.

function shoppingCost(shirtQuantity, pantQuantity, shoeQuantity) {
  const shirtPrice = 600;
  const pantPrice = 800;
  const shoePrice = 1000;

  const totalShirtCost = shirtQuantity * shirtPrice;
  const totalPantCost = pantQuantity * pantPrice;
  const totalShoeCost = shoeQuantity * shoePrice;
  const totalCost = totalShirtCost + totalPantCost + totalShoeCost;
  return totalCost;
}

console.log("Total cost:", shoppingCost(2, 2, 1));
console.log("--------------------------------");

//? Find the cheapest phone from an array of phone objects

const phones = [
  { name: "Samsung", price: 48200 },
  { name: "iQOO", price: 25000 },
  { name: "OnePlus", price: 33000 },
  { name: "Tecno", price: 16000 },
  { name: "Motorola", price: 18000 },
];

function findCheapestPhone(phones) {
  let cheap = phones[0];
  for (const phone of phones) {
    if (phone.price < cheap.price) {
      cheap = phone;
    }
  }
  return cheap;
}

const cheapestPhone = findCheapestPhone(phones);

console.log("Cheapest phone:", cheapestPhone); // Output: Tecno
console.log("--------------------------------");

//? Calculate the total cost of the products in a shopping cart

const shoppingCart = [
  { name: "Shirt", price: 600, quantity: 2 },
  { name: "Pants", price: 800, quantity: 4 },
  { name: "Shoes", price: 1000, quantity: 3 },
  { name: "tShirt", price: 300, quantity: 1 },
];

function totalCost(shoppingCart) {
  let totalCost = 0;
  for (const products of shoppingCart) {
    totalCost += products.price * products.quantity;
  }
  return totalCost;
}

const total = totalCost(shoppingCart);
console.log("Total cost:", total);
console.log("--------------------------------");

/*
 *discounted price calculation
 * upto 100 ---> 100tk
 * upto 200 ---> 90tk
 * more than 200 ---> 70tk
 */

function discountedPrice(amount) {
  if (amount <= 100) {
    const totalCost = amount * 100;
    return totalCost;
  } else if (amount <= 200) {
    const totalCost = amount * 90;
    return totalCost;
  } else {
    const totalCost = amount * 70;
    return totalCost;
  }
}

console.log("Discounted price:", discountedPrice(201)); // Output: 13500
console.log("--------------------------------");
//?calculator
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operation) {
  if (operation === "add") {
    const result = add(num1, num2);
    return result;
  }
  if (operation === "subtract") {
    const result = subtract(num1, num2);
    return result;
  }
  if (operation === "multiply") {
    const result = multiply(num1, num2);
    return result;
  }
  if (operation === "divide") {
    return divide(num1, num2);
  }
}

console.log("divide:", calculator(52, 21, "divide"));
console.log("--------------------------------");

// function calculation(num1, num2, operation) {
//   switch (operation) {
//     case "add":
//       return add(num1, num2);
//     case "subtract":
//       return subtract(num1, num2);
//     case "multiply":
//       return multiply(num1, num2);
//     case "divide":
//       if (num2 === 0) {
//         throw new Error("Cannot divide by zero");
//       }
//       return divide(num1, num2);
//     default:
//       throw new Error("Invalid operation");
//   }

// }

// console.log("Addition:", calculation(5, 7, "multiply")); // Output: 12

//?task1-Find the lowest number in the array below.

const heights = [167, 190, 120, 165, 137, 150, 145, 175, 180];

function findLowestNumber(numbers) {
  let lowest = numbers[0];
  for (const height of numbers) {
    if (height < lowest) {
      lowest = height;
    }
  }
  return lowest;
}

const lowestHeight = findLowestNumber(heights);

console.log("Lowest height:", lowestHeight); // Output: 120
console.log("--------------------------------");

// function getLowestHeight(num1) {
//   return Math.min(...num1);
// }

// const heights2 = [167, 190, 120, 165, 137];
// console.log("Lowest height:", getLowestHeight(heights2));

//? task2-Find the sum of all even numbers in the array below.

function getSmallestName(names) {
  let smallName = names[0];
  for (const name of names) {
    if (name.length < smallName.length) {
      smallName = name;
    }
  }
  return smallName;
}

const names = ["rahim", "robin", "rafi", "ron", "rashed"];
const smallestName = getSmallestName(names);
console.log("Smallest Name:", smallestName);
console.log("--------------------------------");

//?Task-3 Your task is to calculate the total budget required to buy electronics:
function calculateElectronicsBudget(laptop, tablet, mobile) {
  const laptopPrice = 35000;
  const tabletPrice = 25000;
  const mobilePrice = 15000;
  const totalPrice =
    laptop * laptopPrice + tablet * tabletPrice + mobile * mobilePrice;
  return totalPrice;
}
// const laptopQuantity = 1;
// const tabletQuantity = 1;
// const mobileQuantity = 1;

// console.log("Electronics Budget:", calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity));
console.log("Electronics Budget:", calculateElectronicsBudget(2, 3, 2)); // Output: 110000
console.log("--------------------------------");

//? task-4 Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phone = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phone) {
  let totalPrice = 0;
  let count = 0;
  for (const phones of phone) {
    totalPrice += phones.price;
    count++;
  }
  // console.log(totalPrice);
  const averagePrice = totalPrice / count;
  return averagePrice;
}

console.log("Average Phone Price:", findAveragePhonePrice(phone));
console.log("--------------------------------");

//? task-5 For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateMonthlySalary(employees) {
  let totalSalary = 0;
  for (const employee of employees) {
    const currentSalary =
      employee.starting + employee.increment * employee.experience;
    totalSalary += currentSalary;
  }
  return totalSalary;
}

console.log("Total Monthly Salary:", calculateMonthlySalary(employees));
console.log("--------------------------------");

//? Your task is to create a JavaScript function named findMaxSalary that takes an array of employee objects as input and returns the name of the employee with the highest salary.

const employees2 = [
  { name: "rahim", salary: 75000 },
  { name: "robin", salary: 50000 },
  { name: "rafi", salary: 60000 },
  { name: "ron", salary: 80000 },
  { name: "rashed", salary: 90000 },
];

function findMaxSalary(employees) {
  let maxSalary = 0;
  let maxSalaryEmployee = "";
  for (const employee of employees) {
    if (employee.salary > maxSalary) {
      maxSalary = employee.salary;
      maxSalaryEmployee = employee.name;
    }
  }
  return maxSalaryEmployee;
}

console.log("Employee with Highest Salary:", findMaxSalary(employees2));
console.log("--------------------------------");

//? task-6 Your task is to write a JavaScript function named calculateAverageSalary that takes an array of employee objects as input and returns the average salary of all employees.

const employees3 = [
  { name: "rahim", salary: 75000 },
  { name: "robin", salary: 50000 },
  { name: "rafi", salary: 60000 },
  { name: "ron", salary: 80000 },
  { name: "rashed", salary: 90000 },
];
function calculateAverageSalary(employees) {
  let totalSalary = 0;
  let employeeCount = 0;
  for (const employee of employees) {
    totalSalary += employee.salary;
    employeeCount++;
  }
  return totalSalary / employeeCount;
}

const averageSalary = calculateAverageSalary(employees3);

console.log("Average Salary:", averageSalary);
console.log("--------------------------------");
