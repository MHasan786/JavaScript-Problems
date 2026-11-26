// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 6; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row *= j;
//   }
//   console.log(row);
// }

// const arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     console.log(`(${arr[i]}, ${arr[j]})`);
//   }
// }

// const arr = [2, 4, 6, 4, 8, 2, 3, 5, 3, 5];
// let count = 0;
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       console.log(arr[i]);
//       count++;
//       newArr.push(arr[i]);
//     }
//   }
// }
// console.log(count);
// console.log(newArr);

// const arr = [3, 4, 7, 4, 3];
// let isPaildrome = false;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[0] === arr[arr.length - 1] && arr[1] === arr[arr.length - 2]) {
//       isPaildrome = true;
//       break;
//     }
//   }
// }

// if (isPaildrome) {
//   console.log("Array is Paildrome");
// } else {
//   console.log("Array is not Paildrome");
// }

// const arr1 = [3, 4, 6, 7, 3, 8, 4];
// const arr2 = [1, 3, 5, 7, 9, 11];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       console.log(arr1[i]);
//     }
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     row += " ";
//   }

//   for (let k = 1; k <= 2 * i - 1; k++) {
//     row += "*";
//   }
//   console.log(row);
// }

// for (let i = 5; i >= 1; i--) {
//   let row = "";
//   for (let j = 5 - i; j >= 1; j--) {
//     row += " ";
//   }
//   for (let k = 2 * i - 1; k >= 1; k--) {
//     row += "*";
//   }
//   console.log(row);
// }
let num = 1;
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }
  console.log(row);
}
