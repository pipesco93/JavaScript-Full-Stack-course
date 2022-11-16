let fs = require('fs');

let jsonArray = fs.readFileSync('./bicicletas.json','utf-8');

let array = JSON.parse(jsonArray);

console.log(typeof(array));

module.exports = array;