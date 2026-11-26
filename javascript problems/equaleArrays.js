const equaleArr = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((crr, index) => crr === arr2[index]);
}

console.log(equaleArr([1, 2, 4], [1, 2, 4]));
console.log(equaleArr([1, 3, 5, 7], [1, 2, 3, 4]));
console.log(equaleArr([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]));