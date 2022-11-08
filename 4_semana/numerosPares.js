// Crear una función que reciba como parámetro un array de números positivos. Tendrá
// la responsabilidad de retornar un nuevo array pero sólo con los valores pares.

function numerosPares (arrayNumeros) {
    let pruebaPar;
    let arrayPares = [];
    let i = 0;
    do {
        pruebaPar = arrayNumeros[i] % 2;
        if (pruebaPar == 0) {
            arrayPares.push(arrayNumeros[i]);
        }
        i = i + 1;
    } while (i < arrayNumeros.length)
    return arrayPares;
}

console.log(numerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));