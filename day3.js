// 1
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 1) {
//     console.log(`Number is Odd ${i}`);
//   }
// }

// 2
// let tMinus = 10;
// while (tMinus > 0) {
//   console.log(tMinus);
//   tMinus--;
// }
// console.log("Blastoff!");
// 3
// const tableOf = 3;

// for (let i = 1; i <= 10; i++) {
//   const result = tableOf * i;
//   console.log(`${tableOf} x ${i} = ${result}`);
// }
// 4
// let total = 0;

// for (let i = 1; i <= 5; i++) {
//   total = total + i;
// }
// console.log(total);
// 5

// for (let i = 1; i <= 15; i++) {
//   if (i % 3 === 0) {
//     console.log(`Fizz ${i}`);
//   } else {
//     console.log(i);
//   }
// }
// 1

// let num = parseInt(prompt("Enter a number: "));

// if (num > 0) {
//   console.log("Number is positive", num);
// } else if (num < 0) {
//   console.log("Number is negative", num);
// } else {
//   console.log("Number is zero", num);
// }
// 2
// const age = parseInt(prompt("Enter your age: "));

// if (age <= 12) {
//   console.log("Your are child.");
// } else if (age >= 13 && age <= 19) {
//   console.log("You are teenager.");
// } else {
//   console.log("You are adult.");
// }
// 3

// const num = parseInt(prompt("Enter a number: "));

// if (num % 2 === 0) {
//   console.log("Given number is even: ", num);
// } else {
//   console.log("Given number is odd: ", num);
// }
// 4

// const pass = prompt("Enter your password: ");

// if (!pass) {
//   console.log("Invaild input");
// } else if (pass.length >= 8) {
//   console.log("Vaild password");
// } else {
//   console.log("Invaild password");
// }

// 5

// const num1 = parseFloat(prompt("enter first number :"));
// const num2 = parseFloat(prompt("enter second number :"));
// const num3 = parseFloat(prompt("enter third number :"));

// console.log(Math.max(num1, num2, num3));

// 6
// const marks = parseInt(prompt("Enter your give marks: "));

// if (isNaN(marks)) {
//   console.log("Invaild input");
// } else if (marks >= 80) {
//   console.log("Your grade is A.");
// } else if (marks >= 60) {
//   console.log("Your grade is B.");
// } else if (marks >= 40) {
//   console.log("Your grade is C.");
// } else {
//   console.log("Your are fail.");
// }

// 7

// const year = parseInt(prompt("Enter a year: "));

// if (isNaN(year)) {
//   console.log("Invaild input.");
// } else if (year % 4 === 0 || (year % 400 === 0 && year % 100 !== 0)) {
//   console.log("Is leap year: ", year);
// } else {
//   console.log("Is not leap year: ", year);
// }

// const username = prompt("Enter username: ");

// if (!username) {
//   console.log("Invaild input.");
// } else if (username === "admin") {
//   console.log("Admin");
// } else {
//   console.log("User");
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
//

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (i = 1; i <= 15; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   let total = (sum += i);
//   console.log(total);
// }

// let table = parseInt(prompt("Enter a table number: "));
// for (let i = 1; i <= 10; i++) {
//   let result = table * i;
//   console.log(`${table} x ${i} = ${result}`);
// }

// let count = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     count++;
//   }
// }
// console.log(count);

// for (let i = 1; i <= 20; i++) {
//   if (!(i % 3 === 0)) {
//     console.log(i);
//   }
// }

// let sum = 0;

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

const factNum = parseInt(prompt("Enter a number: "));

let fact = 5;
for (let i = 1; i <= fact; i++) {
  fact *= i;
}
console.log(fact);
