let graduadoHTML5 = "30 45 25 34 18 23 16 50 72 70";
let graduadosCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJAVASCRIPT = "70 65 58 45 23 57 34 17 72";
let graduadosNODEJS = "45 56 73 34 65 72 70 32";


// las variables que contienen las cadenas de texto, habrá que
// convertirlas a arrays, separando cada elemento por una coma
graduadoHTML5 = graduadoHTML5.split(" ");
graduadosCSS3 = graduadosCSS3.split(" ");
graduadosJAVASCRIPT = graduadosJAVASCRIPT.split(" ");
graduadosNODEJS =  graduadosNODEJS.split(" ");


// Crear una función que reciba como parámetros los cuatro arrays de los
// alumnos graduados y un número comprendido entre el 1 y el 4, donde:
// i. 1 = HTML5
// ii. 2 = CSS3
// iii. 3 = JAVASCRIPT
// iv. 4 = NODEJS

function calculoPromedio(array1, array2, array3, array4, curso) {
    let promedio = 0;
    let suma = 0;
    switch(curso){
        case 1:
            array1.forEach((value) => {suma += Number(value)});
            promedio = suma / array1.length;
            return promedio;
        case 2:
            array2.forEach((value) => {suma += Number(value)});
            return promedio = suma / array2.length;
        case 3:
            array3.forEach((value) => {suma += Number(value)});
            return promedio = suma / array3.length;
        case 4:
            array4.forEach((value) => {suma += Number(value)});
            return promedio = suma / array4.length;
        default:
            return `recuerde que los valores asignados son:
            i. 1 = HTML5
            ii. 2 = CSS3
            iii. 3 = JAVASCRIPT
            iv. 4 = NODEJS`
    }

}


let promedio = calculoPromedio(graduadoHTML5, graduadosCSS3, graduadosJAVASCRIPT, graduadosNODEJS, 4);
console.log(promedio)