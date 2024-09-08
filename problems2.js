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