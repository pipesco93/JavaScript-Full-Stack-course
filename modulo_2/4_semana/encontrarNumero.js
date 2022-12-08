// Crear una función encontrar el número, que reciba por parámetros un array de
// números y un número. La función deberá evaluar si el número proporcionado existe o
// no en el array. De existir debe devolver el mensaje “El número XX sí existe en el
// array”. En el caso contrario debe mostrar el mensaje: “El valor solicitado no existe”.

let numArray = [1, 2, 6, 7, 4, 10, 20];

function encontrarNumero (arraNum, num) {
    if (arraNum.includes(num)){
        return `El numero ${num} si esxiste en el array`
    } else {
        return `El numero ${num} no esxiste en el array`
    }
}


let resultado = encontrarNumero(numArray, 21);
console.log(resultado);