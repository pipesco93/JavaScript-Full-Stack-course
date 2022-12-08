let bikeList = require(__dirname + '/datosBici.js');

let dhBici = {
    bicicletas: bikeList,
    buscarBici: function (bikeid) {
        let lista = this.bicicletas;
        let busca = lista.filter((element) => element.id == bikeid);
        if (busca.length == 0){
            return null;
        } else {
            return busca[0];
        }
        
    },
    venderBici: function(bikeid) {
        let bici = this.buscarBici(bikeid);
        //console.log(bici);
        if (bici.vendida == "no"){
            bici.vendida = "si";
        } else if (bici.vendida == "si"){
            return "La bici ya se ha vendido";
        } else {
            return "Bici no encontrada";
        }
        return bici;
    },
    biciParaLaVenta: function(){
        let lista = this.bicicletas;
        return lista.filter((element) => element.vendida == "no");
        
    },
    totalDeVentas: function(){
        let lista = this.bicicletas;
        return lista.filter((element) => element.vendida == "si")
        .reduce((acumulador, bici) => acumulador + bici.precio, 0);
    }

};


// console.log(dhBici.venderBici(2));
// console.log(dhBici.buscarBici(2));
console.log(dhBici.totalDeVentas());

