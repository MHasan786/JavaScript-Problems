// // const square = (n) => n * n;
// // console.log(square(4));

// let name = "Ali";
// const score = 95;

// console.log(`${name} scored ${score} marks.`);

// 3

// function multiply(a, b = 2) {
//   return a * b;
// }

// console.log(multiply(5));

// 4
// let person = { name: "Bilal", city: "Lahor" };
// let { name, city } = person;

// console.log(person);
// 5

// arr1 = [1, 2];
// arr2 = [3, 4];

// const arr = [...arr1, ...arr2];
// console.log(arr);
// 6

// const sumAll = (...nums) => {
//   return nums.reduce((acc, curr) => acc + curr, 0);
// };

// console.log(sumAll(2, 3, 4, 5, 6, 7, 9, 8));
// const sumAll = (...num) => {
//   let total = 0;
//   for (let n of num) {
//     if (typeof n === "number") {
//       total += n;
//     }
//   }
//   return total;
// };

// console.log(sumAll("H", 1, "a", 2, "s", 3, "a", 4, "n", 5));
// 8

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Task Completed!"), 2000);
// });

// myPromise.then((result) => console.log(result));

// 9

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Task Completed!"), 3000);
// });

// async function runTask() {
//   console.log("Waiting for a task....!");
//   let result = await myPromise;
//   console.log(result);
// }

// runTask();

// 10

const arr1 = [1, 2, 3];
const arr2 = [2, 4, 5];
const arr3 = [3, 5, 6, 7];

const merageAndUnique = (arr1, arr2, arr3) => {
  const merged = [...arr1, ...arr2, ...arr3];
  const unique = [...new Set(merged)];
  console.log(unique);
};

merageAndUnique(arr1, arr2, arr3);
