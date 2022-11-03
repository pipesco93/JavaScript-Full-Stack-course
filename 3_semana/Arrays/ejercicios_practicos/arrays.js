// 1 Define un array que contenga un conjunto de seis (6) productos de electrodomésticos.
let electrodomesticos = ["licuadora", "batidora", "horno-electrico", "lavadora", "nevera", "televisor"];

// 2  Acceder de manera aleatoria a diferentes elementos del array.

console.log(electrodomesticos[1]);
console.log(electrodomesticos[2]);
console.log(electrodomesticos[4]);

// 3 Extraer el primer elemento del array y agregarlo al final del mismo.

let primerElemento = electrodomesticos.shift();
console.log(electrodomesticos);
electrodomesticos.push(primerElemento);
console.log(electrodomesticos);

// 4 Agregar al final del array dos (2) nuevos productos.

electrodomesticos.push("radio", "parlante");
console.log(electrodomesticos);

// 5 Mostrar por la consola la cantidad de elementos que contiene el array.
console.log("el array tiene " + electrodomesticos.length + " elementos");

/* 6 Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array. 
De existir, se le debe mostrar el mensaje: “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”.*/

let elementoBuscado = "Microondas";

if (electrodomesticos.includes(elementoBuscado)){
    console.log("El producto buscado existe");
} else {
    console.log("Producto no encontrado");
}

// 7 Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.
electrodomesticos = electrodomesticos.join(" ");
console.log(electrodomesticos);

// 8 Determinar la cantidad de elementos que posee la cadena de texto obtenida.
console.log("la cadena de texto tiene " + electrodomesticos.length + " elementos, contando espacios");

// 9 Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.
let newString = electrodomesticos.replace("batidora", "cafetera");
console.log(newString);

/* 10  Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
una coma. */

let newArray = newString.split(" ");
console.log(newArray);