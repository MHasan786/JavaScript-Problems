const countChar = (word, char) => {
    word.toLowerCase();
    char.toLowerCase();

    wordArr = word.split("").reduce((acc, curt) => {
        if (curt === char) {
            acc++;
        }
        return acc;
    }, 0)
    return (wordArr);
}


console.log(countChar("Hassan", 's'));