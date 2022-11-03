let tiposDeHamburguesa = {
    carneParrilla : 1800,
    pollo: 1500,
    vegetariana : 1200
}

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
                precioFinal = precioFinal + precioAdiciones[i];
            }
        }
    }
    console.log(precioFinal);
}


claculoPrecio ("Parrilla", pedidoAdiciones);