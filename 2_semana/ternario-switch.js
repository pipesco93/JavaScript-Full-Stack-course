// IF ternario
let fruta = "Manzana"

let resultado = fruta == "Manzana"?"Buenisimo me gusta la manzana" : "Uf no"

console.log(resultado)


// Switch

let semaforo = "Amarillo"

switch(semaforo){
    case "Verde":
        console.log("pudo cruzar");
        break;
    case "Amarillo":
        console.log("precaucion");
        break;
    case "Rojo":
        console.log("No Cruces");
        break;
    default:
        console.log("Sin datos");
        break;

}
