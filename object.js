// const car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
// };
// adddng a new property
// car.passengerCapacity = 5;
// console.log(car);

// const propName = 'passengerCapacity';
// car[propName] = 454;

// console.log(car);

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// console.log(Object.keys(student).length);

let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (let prop in myObject) {
    console.log(prop + " : " + myObject[prop] + " |" + 'type' + ':' + typeof myObject[prop]);
}
