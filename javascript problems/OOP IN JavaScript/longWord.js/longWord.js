function longWor(str) {
    if (str.trim().length === 0) {
        return false;
    } else {
        let strArr = str.split(' ');
        strArr.sort((a, b) => a.length - b.length);
        return strArr.at(-1);
    }
}

let str = longWor("My name is Hassan.I learn JavaScript with 100 days of challenge");
console.log(str);