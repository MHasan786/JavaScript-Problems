const avrageOfNum = (arr) => {
    // reduce method is use to sum of array elements.
    let sum = arr.reduce((acc, crr) => acc + crr, 0);

    return sum / arr.length;
}

console.log(avrageOfNum([1, 2, 3, 4, 5, 6]));
console.log(avrageOfNum([3, -5, 2, 9, 5, 8, 7]));