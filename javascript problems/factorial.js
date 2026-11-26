const findFactorial = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(findFactorial(0));
console.log(findFactorial(6));