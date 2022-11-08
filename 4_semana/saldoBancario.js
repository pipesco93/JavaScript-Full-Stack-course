// Funcion para calcular el saldo de una pesona

// Array con cada una de las operaciones, deposito o retiro
let listaMovimientos = [10, 10, 20, 30, 10, -5, -25, -4, 23, -36];



function calculoSaldo (listaMovimientos) {
//Funcion para calcular total depositos, total retiros y saldo final

    //Valor inicial de las variables
    let depositos = 0;
    let retiros = 0;
    let saldoActual = 0;

    //Iteracion para ver todos los numero del array
    for (let i = 0; i < listaMovimientos.length; i++){

        listaMovimientos[i] < 0 ? retiros = retiros + listaMovimientos[i] : depositos = depositos + listaMovimientos[i];

        // if (listaMovimientos[i] < 0){
        //     retiros = retiros + listaMovimientos[i];
        // } else {
        //     depositos = depositos + listaMovimientos[i];
        // }
    }
    //Calculo de saldo final 
    saldoActual = depositos + retiros;
    //Retorno de los valores
    return [depositos, retiros, saldoActual];
}


function mensajeSaldo (nombe, apellido, arrayOperaciones, callback) {
//Funcion para entregar el mensaje, recibe como parametros nombre, apellido 
// array de operaciones y fincion callback para calcular saldo 
    let totalOperaciones = callback(arrayOperaciones);
    
    let mensaje = `Estimado ${nombe} ${apellido} :
    
    El monto total de los depositos es de: $${totalOperaciones[0]}.
    El monto total de los retiros es de: $${totalOperaciones[1]*-1}.
    Por lo tanto, su saldo actual en la cuenta es de: $${totalOperaciones[2]}`

    return mensaje
}

console.log(mensajeSaldo("Felipe", "Escobar", listaMovimientos, calculoSaldo))