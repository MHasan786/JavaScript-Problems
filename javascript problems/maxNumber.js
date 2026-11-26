const findMaxNum = (arr) => {
    // Spread oprator is use to convert array into simple numbers.
    return Math.max(...arr);
}

let arr = [23, 44, 1, 13, 19, 24];
console.log(findMaxNum(arr));