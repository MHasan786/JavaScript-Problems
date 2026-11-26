let triangle = {
    length : 4,
    base : 3,
    height : 5,
     
    area : function(base,length){
        return (this.base * this.length) / 2;
    },

    perimeter : function(base,length,height){
        return parseInt(this.base + this.length + this.height);
    },
}

let area = triangle.area();
let peri = triangle.perimeter();
let result = document.getElementsByTagName('h2')[0].innerHTML = area;
let result1 = document.getElementsByTagName('h3')[0].innerHTML = peri;
