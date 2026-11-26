// let book = {
//   title: "The Road",
//   author: "Cormac McCarthy",
//   year: 2006,
// };
// console.log(book["author"]);
// console.log(book);
// book.pages = 287;
// console.log(book);
// delete book.year;
// console.log(book);
// 2
// let user = { name: "Hasan", age: 21 };
// let { name, age } = user;
// console.log(name);
// console.log(age);
// 3

// const calculater = {
//   add: function add(a, b) {
//     return a + b;
//   },
//   subtract: function sub(a, b) {
//     return a - b || b - a;
//   },
//   multiplication: function mult(a, b) {
//     return a * b;
//   },
//   divsion: function div(a, b) {
//     if (b === 0) {
//       return "Infinity";
//     }
//     return a / b;
//   },
//   power: function pow(a, b) {
//     return b === 0 ? 1 : a ** b;
//   },
//   modulus: function mod(a, b) {
//     return a % b;
//   },
//   sqrt: function sqrt(a, b) {
//     if (a > 0 && b === 0) {
//       return Math.sqrt(a).toFixed(2);
//     } else if (a === 0 && b > 0) {
//       return Math.sqrt(b).toFixed(2);
//     }
//   },
// };

// console.log(calculater.multiplication(12, 4));
// console.log(calculater.add(12, 4));
// console.log(calculater.subtract(12, 4));
// console.log(calculater.divsion(12, 0));
// console.log(calculater.sqrt(0, 27));
// console.log(calculater.power(2, 0));
// 5

// const groupByCity = (students) => {
//   let result = {};

//   for (let student of students) {
//     let city = student.city;
//     if (!result[city]) {
//       result[city] = [];
//     }
//     result[city].push(student.name);
//   }
//   return result;
// };

// let students = [
//   { name: "Ali", city: "Lahor" },
//   { name: "Hamza", city: "Multan" },
//   { name: "Asad", city: "Bahawalpur" },
//   { name: "Bilal", city: "Lahor" },
// ];

// console.log(groupByCity(students));

const student = {
  name: "Hamza",
  age: 21,
  course: "Computer science",
};

student.age = 24;
student.city = "Lahor";

delete student.age;
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.city);
