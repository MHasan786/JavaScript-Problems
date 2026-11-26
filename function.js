const { log } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Enter the number :", (num) => {
//   num = Number(num);
//   function square(num) {
//     return num * num;
//   }
//   console.log(square(num));
//   rl.close;
// });

// 2
// const greet = (name) => {
//   console.log(`Hello ${name}`);
// };
// greet("Hasan");
// 3

// function sum(a, b, c) {
//   sum = Number(a) + Number(b) + Number(c);
//   console.log("The sum of given numbers:", sum);
//   return;
// }

// sum(44, 25, 16);
// 4

// const isEven = (num) => {
//   return num % 2 === 0;
// };

// rl.question("Enter a number: ", (num) => {
//   num = Number(num);

//   console.log(isEven(num));

//   rl.close();
// });
// 5

// function factorial(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   console.log(fact);
// }
// rl.question("Enter a number: ", (num) => {
//   num = Number(num);
//   factorial(num);
//   rl.close;
// });
// 6
// const reverseString = (str) => {
//   let reverseStr = str.split("").reverse().join("");
//   return reverseStr;
// };
// console.log(reverseString("Hasan"));
// 7

// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length - 1; i--) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax([12, 33, 56, 0, 21]));
// 8
// function calculateGrade(score) {
//   if (score >= 90) {
//     console.log("A");
//   } else if (score >= 80) {
//     console.log("B");
//   } else if (score >= 70) {
//     console.log("C");
//   } else if (score >= 60) {
//     console.log("D");
//   } else {
//     console.log("F");
//   }
// }

// rl.question("Enter scores: ", (score) => {
//   score = Number(score);
//   calculateGrade(score);
//   rl.close;
// });
// 8

// const simpleCalculater = (num1, num2, symbol) => {
//   if (symbol === "+") {
//     let add = num1 + num2;
//     return add;
//   } else if (symbol === "-") {
//     let sub = num1 - num2;
//     return sub;
//   } else if (symbol === "*") {
//     let mul = num1 * num2;
//     return mul;
//   } else if (symbol === "/") {
//     let div = num1 / num2;
//     return div;
//   }
// };

// console.log(simpleCalculater(13, 22, "+"));
// console.log(simpleCalculater(13, 22, "-"));

// function name() {
//   console.log("Muhammad Hasan");
// }
// name();

// function sum(x, y) {
//   return x + y;
// }

// console.log(sum(9, 13));

// const isEvenOrOdd = (num) => {
//   if (num % 2 === 0) {
//     console.log("Given number is even: ", num);
//   } else {
//     console.log("Given number is odd: ", num);
//   }
// };

// isEvenOrOdd(6793);

// const squareOfNum = (num) => {
//   return num * num;
// };
// console.log(squareOfNum(7));

// const largeNum = (num1, num2) => {
//   if (num1 > num2) {
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }
// };
// largeNum(113, 44);

// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// const str = "A quick fox jumps over the dog.";
// console.log(countVowels(str));

// const reverseStr = (str) => {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   return reverse;
// };
// const str = "Hasan";
// console.log(reverseStr(str));

// const postiveNum = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       count++;
//     }
//   }
//   return count;
// };

// const arr = [-2, 4, -9, -11, 33, 19, 0, 11];
// console.log(postiveNum(arr));

// const palindrome = (arr) => {
//   let isPalindrome = true;

//   for (let i = 0; i < arr.length / 2; i++) {
//     if (arr[i] !== arr[arr.length - 1 - i]) {
//       isPalindrome = false;
//       break;
//     }
//   }

//   if (isPalindrome) {
//     console.log("It is palindrome.");
//   } else {
//     console.log("It is not palindrome.");
//   }
// };

// const arr = [1, 2, 3, 2, 1];

// palindrome(arr);

// const commonElements = (arr1, arr2) => {
//   let newArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     let alreadyExist = false;
//     for (let k = 0; k < newArr.length; k++) {
//       if (newArr[k] === arr1[i]) {
//         alreadyExist = true;
//         break;
//       }
//     }
//     if (alreadyExist) continue;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         newArr.push(arr1[i]);
//         break;
//       }
//     }
//   }
//   return newArr;
// };

// const arr1 = [2, 2, 4, 6, 7, 8, 9];
// const arr2 = [2, 3, 5, 6, 8, 9];
// console.log(commonElements(arr1, arr2));

// const duplication = (arr) => {
//   let duplication = [];
//   for (let i = 0; i < arr.length; i++) {
//     let alreadyExist = false;
//     for (let k = 0; k < duplication.length; k++) {
//       if (duplication[k] === arr[i]) {
//         alreadyExist = true;
//         break;
//       }
//     }
//     if (alreadyExist) continue;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         duplication.push(arr[i]);
//         break;
//       }
//     }
//   }
//   return duplication;
// };

// const arr = [2, 3, 4, 4, 5, 6, 7, 7, 9];
// console.log(duplication(arr));

// const sortedArr = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return "Not Sorted";
//     }
//   }

//   return "Sorted";
// };

// const arr = [3, 2, 1, -3, 7, 6, 9, 8];

// console.log(sortedArr(arr));
