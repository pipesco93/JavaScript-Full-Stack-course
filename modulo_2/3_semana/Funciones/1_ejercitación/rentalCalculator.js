//Variables de entrada
let tipoDeVehiculo = "compacto";
tipoDeVehiculo.toLowerCase();
let diasAlquiler = 2;
let sillaBebe = true;

//Constantes
let tarifaCompacto = 14000;
let tarifaMediano = 17000;
let tarifaCamioneta = 28000;
let tarifaSilla = 1200;

//Funcione PAra determianr la tarifa
let determinarTarifa = (vehiculo) => {
    let tarifa = 0;
    switch (vehiculo){
        case "compacto":
            tarifa = tarifaCompacto;
            break;
        case "mediano":
            tarifa = tarifaMediano;
            break;
        case "camioneta":
            tarifa = tarifaCamioneta;
            break;
        default:
            tarifa = 0;
            //console.log((tarifa))
    }
    return tarifa;
}


//Funcion para calcular tarifa final
function rentalCalculator(vehiculo, dias, silla, callback) {
    let recargoSilla = 0;
    let pagoFinal = 0;
    let tarifa = 0;
    
    silla == true ? recargoSilla = dias * tarifaSilla : recargoSilla = 0;
    
    tarifa = callback(vehiculo);
    pagoFinal = (tarifa * dias) + recargoSilla;

    if (silla == true && tarifa != 0){
        return `Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado, considerando los ${diasAlquiler} días
    utilizados, y que lleva silla de bebe, el monto total a pagar es de $${pagoFinal}`;
    } else if (silla == false && tarifa != 0){
        return `Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado, considerando los ${diasAlquiler} días
    utilizados, el monto total a pagar es de $${pagoFinal}`;
    } else {
        console.log("Datos incorrectos");
    }
    

}

console.log(rentalCalculator(tipoDeVehiculo, diasAlquiler, sillaBebe, determinarTarifa));