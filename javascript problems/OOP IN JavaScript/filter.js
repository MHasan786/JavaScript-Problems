function filter(arr) {
    return arr.filter((num) => num % 2 !== 0);
}
const arr = [0, 3, 4, 6, 9, 12, 16, 13, 20, 21, 28, 30, 34, 38, 41];
const arr1 = [7, 9, 14, 18, 21, 27, 28, 36, 35, 42, 45, 49, 54, 56, 63, 63, 70, 72, 81, 90];
function table(arr1) {
    return arr1.filter((n) => n % 7 === 0);
}

console.log(filter(arr));
console.log(table(arr1));