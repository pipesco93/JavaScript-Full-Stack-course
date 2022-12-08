// Crear una función Juego de trompito, que reciba dos parámetros:
// a. El primero, un array con las siguientes cadenas de texto: “Toma 1” ,”Toma 2”,
// “Pon 1”, “Pon 2”, “Todos ponen”, “Toma todo”
// b. El segundo parámetro será la cantidad de vueltas del trompito comprendidas
// entre 2 y 6.
// La función tendrá como responsabilidad generar un número aleatorio comprendido
// entre 0 y 5. En función del resultado obtenido

arrayTrompo = ["Toma 1" , "Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function trompo(array, min, max, callback){
    let resultado = callback(min, max);
    return array[resultado];
}

let resultadoJuego = trompo(arrayTrompo, 0, 5, getRandomInt);
console.log(resultadoJuego);