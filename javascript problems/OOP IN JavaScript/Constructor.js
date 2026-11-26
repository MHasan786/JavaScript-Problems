function createSquare(length){
    return{ 
        length,

        area : function(length){
            return length * 4;
        }
    }
}

const sqr = createSquare(parseFloat(prompt("Enter length of square: ")));
// let area = createSquare.area();
// let result = document.getElementsByTagName('h3')[0].innerHTML = area;
