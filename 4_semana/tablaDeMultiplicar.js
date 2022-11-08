function tablas (){
// Fincion que muetras las tablas de multiplicar del 1 al 10 en consola
    let cantidadTabla = 1;
    let resultado = 0;

    while (cantidadTabla <= 10) {
        console.log(`Tabla del ${cantidadTabla}:\n----------------------`)
        for( let i = 1; i < 11; i++) {
            resultado = cantidadTabla * i;
            console.log(`${cantidadTabla} * ${i} = ${resultado}\n`);

        }
    console.log("\n");
    cantidadTabla ++;
    }
}

tablas();