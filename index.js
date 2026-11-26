// const score = 50;
// let attendance = 75;

// const passCondition = score > 80 && attendance > 70;

// console.log(passCondition);

// const num = 24;

// const result = num % 2 === 0 ? "Even" : "Odd";
// console.log(result);

// let age = 65;

// const massage = age >= 18 ? "Welcome to the party!." : "Go home, kid.";

// console.log(massage);

//

// const x = 12;
// const y = 15;
// const z = 22;

// let sum = x + y + z;
// let avg = sum / 3;
// console.log(avg.toFixed(2));

// const num1 = parseInt(prompt("Enter a num1: ", 10));
// const num2 = parseInt(prompt("Enter a num2: ", 10));

// const sum = num1 + num2;
// console.log(sum);

// const num = parseInt(prompt("Enter a number: "));

// const evenOdd =
//   num % 2 === 0 ? `Number is even: ${num}` : `Number is odd: ${num}`;
// console.log(evenOdd);

// const age = parseInt(prompt("Enter your age: "));

// const canVote =
//   age >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";

// console.log(canVote);

// const value = prompt("Enter a value: ");
// const truthyFalsy = value ? "Vaild input" : "Invalid input";
// console.log(truthyFalsy);

// const num1 = parseInt(prompt("Enter a number: "));
// const num2 = parseInt(prompt("Enter another number: "));

// const largerNumber = Math.max(num1, num2);
// console.log(`The larger number is: ${largerNumber}`);

// const num = parseFloat(prompt("Enter a number: "));
// if (num > 0) {
//   console.log(`${num} is positive.`);
// } else if (num < 0) {
//   console.log(`${num} is negative.`);
// } else {
//   console.log(`${num} is zero.`);
// }

// const input = prompt("Enter a input: ");

// const exists = input ? `You entered: ${input}` : "No input provided.";
// console.log(exists);

// const bool = false;
// const num = 3;

// const add = bool + num;
// console.log(add);

const num = prompt("Enter a number: ");
const addOrError = num ? Number(num) + 5 : "error";
console.log(addOrError);
