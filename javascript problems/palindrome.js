const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");

    reverseStr = str.split('').reverse().join('');
    console.log(reverseStr);

    return str === reverseStr ? true : false;
}

console.log(isPalindrome("Racecar"));
console.log(isPalindrome("green"));