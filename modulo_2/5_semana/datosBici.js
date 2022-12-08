let fs = require('fs');

let jsonToObject = (jsonPath) =>{
    let jsonArray = fs.readFileSync(jsonPath,'utf-8');
    let object = JSON.parse(jsonArray);
    return object
}

let path = './bicicletas.json';
let jsonTransformed = jsonToObject(path);

//console.log(jsonTransformed);

module.exports = jsonTransformed;