// 1
// function addNumbers(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNumbers(10, 20));
// 2
// const multiply = (a, b) => a * b;
// console.log(multiply(2, 5));
// 3
const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
const weatherReport = (fahrenheit) => {
  let c = toCelsius(fahrenheit);
  return `${c.toFixed(2)} Celsius`;
};

console.log(weatherReport(100));
console.log(weatherReport(78));
