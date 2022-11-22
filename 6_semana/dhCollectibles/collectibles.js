// Se crea el file system para trar los archivos
let fs = require('fs');

const jsonToObject = (toyBrand) => {
    //Selecciono el path segun el argumento de la funcion
    let path = '';
    switch(toyBrand.toLowerCase()) {
        case "hot toys":
            path = './Datos/figuras1.json';
            break;
        case "bandai":
            path = './Datos/figuras2.json';
            break;
        case "star wars":
            path = './Datos/figuras3.json';
            break;
        default:
            return 'brand not found'
    }
    // Conbieto el el JSON en un objeto literal
    let jsonArray = fs.readFileSync(path,'utf-8');
    let object = JSON.parse(jsonArray);
    return object
}

// let jsonTransformed = jsonToObject("star wars");
// console.log(jsonTransformed);

//Exporto el modulo para poder ser usado en otro archivo .js
exports.jsonToObject = jsonToObject;