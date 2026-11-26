const sortArray = (arr) => {
    return arr.sort((a, b) => a - b);
}

let arr = [4, 6, 1, 0, -3, -11, 12, 9, 34, -21];
console.log(sortArray(arr));