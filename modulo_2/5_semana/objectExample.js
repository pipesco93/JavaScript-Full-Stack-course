//Buena practica llamar los objetos con mayuscula
const dot = {
    coordX: 5,
    coordY: 13,
    getX: function(){
        return this.coordX;
    },
    getY: function(){
        return this.coordY;
    },
}


function Dot(coordx, coordy){
    this.coordX = coordx;
    this.coordY = coordy;
}

const dot1 = new Dot(6,7);
console.log(dot1)
const dot2 = new Dot(0,19);
console.log(dot2)
console.log(dot)