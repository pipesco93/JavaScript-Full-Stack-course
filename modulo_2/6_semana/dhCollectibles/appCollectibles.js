// "Llamo" el modulo del archivo collectibles.js
const figures = require('./collectibles');

// Se crean los objetos literarios usando el modulo importado
const hotToys = figures.jsonToObject('hot toys');
const bandai = figures.jsonToObject('bandai');
const starWars = figures.jsonToObject('star wars');

// Se unen los array en un unico array
const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];
//console.log(unifiedCollectibles);

const collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function(){
        const lista = this.figuras;

        //lista.forEach(element => console.log(element));

        lista.forEach(element => {
            for (const [key, value] of  Object.entries(element)){
                console.log(`${key}: ${value}`);
            }
            console.log('\n');
           
        });
    },
    figuresByBrand: function(toyBrand){
        let lista = this.figuras;
        return lista.filter((element) => element.marca == toyBrand);
    },
};


collectibles.listFigures();
//console.log(collectibles.figuresByBrand("Star Wars"));