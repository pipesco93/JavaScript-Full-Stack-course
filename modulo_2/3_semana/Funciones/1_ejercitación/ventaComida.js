
 // Objeto para precios de base
let tiposDeHamburguesa = {
    carneParrilla : 1800,
    pollo: 1500,
    vegetariana : 1200
}

// Objeto para precio de adiciones
let precioAdiciones = {
    jamon : 30,
    queso : 25,
    salsaTomate : 5,
    mayonesa :5,
    mostaza : 5,
    tomate : 15,
    lechuga : 10,
    cebolla : 10,
};

//Objeto para pedido, en lugar de pasar a la funcion una variable por cada adicion solo le paso 
//un objeto con las adiciones, true si lleva adicion false si no lleva
let pedidoAdiciones = {
    jamon : true,
    queso : true,
    salsaTomate : false,
    mayonesa :true,
    mostaza : false,
    tomate : true,
    lechuga: true,
    cebolla : true,
};


function presioBase () {
    // Funcion para determinar el precio de la base seleccionada
    // Recibe como parametro un string  con el tipo de hamburguesa
    
}

function claculoPrecio (base, adiciones) {
    let precioFinal = 0;

    if (base == "Parrilla") {
        precioFinal = tiposDeHamburguesa.carneParrilla;
    } else if (base == "Pollo") {
        precioFinal = tiposDeHamburguesa.pollo;
    } else if (base == "Vegetariana") {
        precioFinal = tiposDeHamburguesa.vegetariana;
    } else {
        console.log("Pedido No valido")
    }

    if (precioFinal != 0){
        for (let i in adiciones) {
            if (adiciones[i]) {
                console.log(tiposDeHamburguesa[i]);
                precioFinal = precioFinal + precioAdiciones[i];
            }
        }
    }
    console.log(precioFinal);
}


claculoPrecio ("Parrilla", pedidoAdiciones);