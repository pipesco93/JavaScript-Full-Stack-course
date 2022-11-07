let listaMovimientos = [10, 10, 20, 30, 10, -5, -25, -4, 23, -36];

function calculoSaldo (listaMovimientos) {
    let depositos = 0;
    let retiros = 0;
    let saldoActual = 0;

    for (let i = 0; i < listaMovimientos.length; i++){
        if (listaMovimientos[i] < 0){
            retiros = retiros + listaMovimientos[i];
        } else {
            depositos = depositos + listaMovimientos[i];
        }
    }
    saldoActual = depositos + retiros;

    return [depositos, retiros, saldoActual];
}


function mensajeSaldo (nombe, apellido, arrayOperaciones, callback) {
    let totalOperaciones = callback(arrayOperaciones);
    
    let mensaje = `Estimado ${nombe} ${apellido} :
    
    El monto total de los depositos es de: $${totalOperaciones[0]}.
    El monto total de los retiros es de: $${totalOperaciones[1]}.
    Por lo tanto, su saldo actual en la cuenta es de: $${totalOperaciones[2]}`

    return mensaje
}

console.log(mensajeSaldo("Felipe", "Escobar", listaMovimientos, calculoSaldo))