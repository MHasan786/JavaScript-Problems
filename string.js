// let str = "hello world";
// let upper = str.toUpperCase();
// console.log(upper);
// let lower = upper.toLowerCase();
// console.log(lower);
// 2
// let js = " JavaScript ";
// console.log(js.trim());
// 3

// let string = "JavaScript";
// let newString = string.slice(4, 10);
// console.log(newString);
// 4

// let str = "This is bad.";
// let newStr = str.replace("bad", "good");
// console.log(newStr);
// 5

// let names = "Ali Bilal Sara";
// let namesArr = names.split(",");
// console.log(namesArr);
// console.log(namesArr.join(" - "));
// 6

//

// let str = "Muhammad Hasan";
// function countVowels(str) {
//   let count = 0;
//   const vowels = "aeiouAEIOU";

//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels(str));
// 7
// let str = "Muhammad Hasan";

// let reverseStr = str.split("").reverse().join("");

// console.log(reverseStr);
// 8
//

// 9
let sentence = "Ali Bilal Ali Hamza Ali";
function countFrequency(sentence) {
  let words = sentence.trim().split(" ");
  let frequency = {};

  for (let word of words) {
    if (frequency[word]) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
}

console.log(countFrequency(sentence));
