// const fruits = ["mango", "apple", "banana", "orang", "cherry"];
// const newFruits = fruits.slice(0, 3);
// console.log(newFruits);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);
// fruits.push("graps");
// fruits.shift();
// console.log(fruits);
// 2
// const num = [10, 20, 30, 40, 50];

// const doubleNum = num.map((n) => n * 2);
// console.log(doubleNum);
// 3

// const arr = [10, 20, 30, 40, 50];
// const newArr = arr.filter((x) => x > 25);
// console.log(newArr);
// 4
// const num = [10, 20, 30, 40, 50];

// const sum = num.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);
// 5
// let names = ["Hasan", "Waseem", "Usama", "Zohiab", "Ali"];

// const longestName = (names) => {
//   let name = names.reduce((acc, curr) => {
//     return curr.length > acc.length ? curr : acc;
//   });
//   return name;
// };

// console.log(longestName(names));
// 6
// const arr = [1, 2, 3, 4, 2, 6, 3, 7, 9, 2];

// const unique = (arr) => {};
// // 7
// const marks = [45, 67, 89, 32, 90];
// const totalMarks = marks.reduce((acc, curr) => acc + curr, 0);
// const avrage = totalMarks / marks.length;
// console.log(avrage);

// const highestMarks = marks.reduce((acc, curr) => {
//   return curr > acc ? curr : acc;
// }, marks[0]);
// console.log(highestMarks);

// const lowestMarks = marks.reduce((acc, curr) => {
//   return curr < acc ? curr : acc;
// }, marks[0]);
// console.log(lowestMarks);

// const passedStudent = marks.reduce((acc, curr) => {
//   return curr >= 50 ? acc + 1 : acc;
// }, 0);

// console.log(passedStudent);

// const arr = [1, 2, 4, 6, 2, 4, 6, 4];

// const currentOccerences = (arr, value) => {
//   return arr.reduce((acc, curr) => {
//     return curr === value ? acc + 1 : acc;
//   }, 0);
// };
// console.log(currentOccerences(arr, 4));
// 8

// const nestedArr = [1, [2, 3], [4, [5, 6]], 7];

// const flatArr = nestedArr.flat(Infinity);
// console.log(flatArr);

// let arr = [2, 4, 5, 6, 7];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// console.log(arr.length);

// let f = arr[0];
// let l = arr[arr.length - 1];
// console.log(f, l);

// let reversArr = [];
// for (let i = arr.length - 1; arr >= 0; i--) {
//   reversArr.push(arr[i]);
// }
// console.log(reversArr);

// const arr = [2, 4, 5, 7, 113, 224, 301, 276];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// const arr = [2, 4, 5, 7, 113, 224, 301, 276];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     count++;
//   }
// }
// console.log(count);

// const arr = [2, 4, 5, 7, 113, 224, 301, 276, 114];

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     count++;
//   }
// }
// console.log(count);

// const arr = [2, 4, 5, 7, 113, 224, 301, 276];
// let oddArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     oddArr.push(arr[i]);
//   }
// }
// console.log(oddArr);

// const arr = [2, 3, 4, 5, 6, 7, 9];

// let num = parseInt(prompt("Enter a number: "));
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (num === arr[i]) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   console.log("Number exists in an array", num);
// } else {
//   console.log("Number dose not exists in an array", num);
// }

// const arr = [11, 0, 1, 3, 5, 6, 8, 9, 10];

// let num = parseInt(prompt("Enter a number :"));
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   console.log("Number greater then 10: ", num);
// } else {
//   console.log("Number not greater then 10.");
// }

// const arr = [4, 31, 23, 6, 0, 27, 71];

// let largestNum = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largestNum) {
//     largestNum = arr[i];
//   }
// }

// console.log(largestNum);

// const arr = [4, 31, 23, 6, 0, 27, 71];

// let smallestNum = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < smallestNum) {
//     smallestNum = arr[i];
//   }
// }
// console.log(smallestNum);

// const arr = [4, 31, 23, 6, 0, 27, 71];

// let existNum = parseInt(prompt("Enter a number: "));
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === existNum) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   console.log("Number exists in array");
// } else {
//   console.log("Number not found");
// }

// const arr = [2, 4, 5, 7, 9, 11, 13];
// const target = 6;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       console.log(arr[i] + "+" + arr[j] + "=" + target);
//     }
//   }
// }

// const arr = [1, 2, 3, 4, 5];

// let first = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
// }

// arr[arr.length - 1] = first;
// console.log(arr);

// const arr1 = [0, 2, 4, 6, 8];
// const arr2 = [1, 3, 5, 7, 9];

// let equal = false;

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i].length === arr2[i].length) {
//     equal = true;
//     break;
//   }
// }

// if (equal) {
//   console.log("Arrays are equal");
// } else {
//   console.log("Arrays are not equal");
// }

// const arr = [2, 6, 7, 9, 11, 14, 16, 21];
// let largestNum = arr[0];
// let sum = 0;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largestNum) {
//     largestNum = arr[i];
//   }
//   sum += arr[i];
//   if (arr[i] % 2 === 0) {
//     count++;
//   }
// }
// console.log(largestNum);
// console.log(sum);
// console.log(count);
