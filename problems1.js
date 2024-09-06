//unit convertion
function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
console.log(inchToFeet(75));

function feetToInch(feet) {
  const inch = feet * 12;
  return inch;
}
console.log(feetToInch(7));

function feetToMeters(feet) {
  const meters = feet * 0.3048;
  return meters;
}
console.log(feetToMeters(7));

function metersToFeet(meters) {
  const feet = meters / 0.3048;
  return feet;
}

console.log(metersToFeet(20));

function kilometeresToMile(kilo) {
  const miles = kilo * 0.621371;
  return miles;
}

console.log(kilometeresToMile(10));

function mileToKilometers(miles) {
  const kilo = miles / 0.621371;
  return kilo;
}

console.log(mileToKilometers(5));

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(25));

function fahrenheitToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

console.log(fahrenheitToCelsius(77));
