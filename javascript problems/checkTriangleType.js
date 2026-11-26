const trinagleType = (a, b, c) => {
    if ((a === b && b === c) && a === c) {
        return "Equilateral Triangle";
    } else if (a === b || b === c || a === c) {
        return "Isoseles Triangle";
    } else if (a !== b && b !== c && a !== c) {
        return "Scelene Triangle";
    }
}

console.log(trinagleType(2, 2, 2));
console.log(trinagleType(3, 3, 2));
console.log(trinagleType(4, 2, 1));