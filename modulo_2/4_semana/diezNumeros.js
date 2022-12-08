/*Crear una función que pida un valor por parámetro 
y muestre los 10 números siguientes*/

let resultado = 0;

function deizNumeros (numero) {
    for (let i = 1; i <= 10; i++) {
        resultado = numero + i;
        console.log(resultado);
    }
}

deizNumeros(10);