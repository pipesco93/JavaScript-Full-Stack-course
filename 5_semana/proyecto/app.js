let fs = require('fs');

let peliculas = require("./peliculas");
console.log(peliculas);

let mensaje = fs.readFileSync(__dirname + '/mensaje.txt', 'utf-8');
console.log(mensaje);

let mensaje2 = fs.readFileSync('./mensaje.txt', 'utf-8');
console.log("otra forma de leerlo\n" + mensaje2);

