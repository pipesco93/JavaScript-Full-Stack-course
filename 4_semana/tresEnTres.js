function tresTres(numero1, numero2) {
    let numeroActual = 0;
    //console.log(numero1);
    for (let i = numero1; i <= numero2; i = i+3) {
        console.log(i);
        numeroActual = numeroActual + i;
        //console.log(numeroActual);
    }
}


tresTres(0, 57);