// 1
// let shoppingList = ["Milk", "Eggs", "Bread", "Apples"];
// console.log(shoppingList[0]);
// console.log(shoppingList[3]);
// 2
// let shoppingList = ["Milk", "Butter", "Bread", "Apples"];
// console.log(shoppingList);
// const len = shoppingList.length;
// console.log(len);

// 3
// let cart = [];
// cart.push("Laptop", "Mouse");
// console.log(cart);
// cart.pop();
// console.log(cart);
//4
// let score = [50, 60, 70, 80, 90];
// for (let i = 0; i < score.length; i++) {
//   console.log(`score is: ${score[i]}`);
// }
// 5

// let scores = [50, 60, 70, 80, 90];
// for(let score of scores){
//     console.log(score)
// }
// 6
// let name = "Hassan Latif";

// for (let char of name) {
//   console.log(char);
// }
// 7
// let prices = [10, 20, 30, 40];
// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// 8
// const num = 0;
// if (num > 0) {
//   console.log(`Number is positive: ${num}`);
// } else if (num < 0) {
//   console.log(`Number is negative: ${num}`);
// } else {
//   console.log(`Number is zero: ${num}`);
// }
// 9

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// 10
// let i = 10;
// while (i >= 0) {
//   let num = i--;
//   console.log(num);
// }
// 11
// let grade = "F";
// switch (grade) {
//   case "A":
//     console.log("Excellent");
//     break;
//   case "B":
//     console.log("Good");
//     break;
//   case "C":
//     console.log("Poor");
//     break;
//   case "D":
//     console.log("Very Poor");
//     break;
//   case "F":
//     console.log("Fail");
// }
// 12

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log("Numbers is even:" + i);
//   }
// }
// 13
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   console.log("The sum of numbers from 1 to 100 is:", sum);
// }
// 14
//

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter a number: ", (num) => {
//   num = Number(num);

//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }

//   rl.close();
// });
// 15

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter a Number: ", (num) => {
//   num = Number(num);

//   const randomNum = Math.floor(Math.random() * 10 + 1);
//   if (num >= 1 && num <= 10) {
//     console.log("You guessed it!");
//   } else {
//     console.log("Try again!");
//   }
//   rl.close;
// });
// 16
// rl.question("Enter a Number: ", (num) => {
//   num = Number(num);
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//     console.log("Factorial of Number", fact);
//   }
// });
// 17

// let names = ["Ali", "Ahamd", "Baber", "Raza", "Hasan", "Usama", "Arbaz"];

// for (let name of names) {
//   if (name.startsWith("A")) {
//     console.log(name);
//   }
// }

// const factNum = parseInt(prompt("Enter a number: "));

// let fact = 5;
// for (let i = 1; i <= fact; i++) {
//   fact *= i;
// }
// console.log(fact);

// const arr = [12, 5, 8, 130, 44];

// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     count++;
//   }
// }

// console.log(count);

// const arr = [12, 5, 8, 130, 44, 133];

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     count++;
//   }
// }
// console.log(count);

// const arr = [12, 5, 8, 130, 44];

// let largeNum = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largeNum) {
//     largeNum = arr[i];
//   }
// }
// console.log(largeNum);

// const arr = [12, 5, 8, 130, 44];

// let smalleNum = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < smalleNum) {
//     smalleNum = arr[i];
//   }
// }
// console.log(smalleNum);

// const arr = [12, 5, 8, 130, 44];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// const arr = [10, 60, 45, 80, 23, 90];

// count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 50) {
//     count++;
//   }
// }

// console.log(count);

// const arr = [10, 60, 45, 80, 23, 90, 33];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
//     console.log("Divisibel by 3 and 5:", arr[i]);
//   }
// }
// const arr = [10, 60, 45, 80, 23, 90];
// let num = parseInt(prompt("Enter a numbe: "));
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === num) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   console.log("Number exist in array.");
// } else {
//   console.log("Number not found.");
// }

// const arr = [4, 2, 4, 6, 4, 8];

// let count = 0;
// let num = parseInt(prompt("Enter a number :"));

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === num) {
//     count++;
//   }
// }
// console.log(`This number appear in array ${count} times.`);

// const arr = [3, 2, 5, 19, 24, 41, 26, 50, 55, 72];

// const evenArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenArr.push(arr[i]);
//   }
// }

// console.log(evenArr);

// const arr = [3, 2, 5, 19, 24, 81, 26, 50, 55, 72];

// let largeNum = arr[0];
// let secondLargeNum = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largeNum) {
//     secondLargeNum = largeNum;
//     largeNum = arr[i];
//   }
// }

// console.log(largeNum);
// console.log(secondLargeNum);

// const arr = [3, 2, 5, 19, 24, 81, 26, 50, 55, 72];

// let reversedArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversedArr.push(arr[i]);
// }
// console.log(reversedArr);

// const arr = [3, 2, 5, -19, 0, 81, 26, 50, 55, 72];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     console.log("Given numbers in arr is positive.", arr[i]);
//   } else if (arr[i] < 0) {
//     console.log("Given numbers in arr is negative.", arr[i]);
//   } else {
//     console.log("Given numbers in arr is zero.", arr[i]);
//   }
// }

// const arr = [3, 2, 5, -19, 0, 101, 81, 26, 50, 123, 55, 72];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 100) {
//     console.log(arr[i]);
//     break;
//   }
// }

// const arr = [3, 2, 5, -19, 0, 101, 81, 26, 50, 123, 55, 72];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// const arr = [3, 2, 5, -19, 0, 101, 81, 26, , 44, 50, 123, 55, 72];

// count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 20 && arr[i] < 50) {
//     count++;
//   }
// }
// console.log(count);

// const arr = [3, 7, 2, 9, 5];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > arr[i - 1]) {
//     console.log(arr[i]);
//   }
// }

// const arr = [3, 12, 7, 2, 9, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     console.log(arr[i]);
//     break;
//   }
// }

// const arr = [1, 2, 3, 4, 5, 7, 6];
// let isSorted = true;

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < arr[i - 1]) {
//     isSorted = false;
//     break;
//   }
// }

// if (isSorted) {
//   console.log("Array is sorted.");
// } else {
//   console.log("Array is not sorted");
// }

// const arr = [4, -2, 7, -5, 0, -1];

// count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     count++;
//   }
// }

// console.log(count);

const arr = [4, -2, 7, -5, 0, -1];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arr[i] = 0;
  }
}
console.log(arr);
