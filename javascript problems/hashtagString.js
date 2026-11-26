function hashtagString(str, hastag) {
    if (str.length > 280 || str.length.trim() === 0) {
        return false;
    }
    str = str.split(' ');
    str = str.map((element) =>
        element.replace(element[0], element[0].toUpperCase())
    )
}
let str = 'my name is muhammad hasan i live in jall';
let hastag = '#';
console.log(hashtagString(str, hastag));