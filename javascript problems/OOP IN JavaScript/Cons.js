function Circle(rad) {
    this.rad = rad;
    this.area = function() {
        return Math.PI * (this.rad * this.rad);
    }
}

let circle = new Circle(parseFloat(prompt("Enter radius: ")));

// Correctly call the area function to get the result
let result = document.getElementsByTagName('h3')[0].innerHTML = circle.area();
