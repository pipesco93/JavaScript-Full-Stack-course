/* requerir módulo autos */
const autosImportados = require('./autos');


let concesionaria = {
   autos: autosImportados, 
   buscarAuto: function(patNum){
      let busca = this.autos.find((element) => element.patente == patNum);
        if (busca == null){
            return null;
        } else {
            return busca;
        }
   },
   venderAuto: function(patNum){
      let autoVenta = this.buscarAuto(patNum)
      if (autoVenta == null){
        return "Este numero de patente no esta en el inventario"
      } else{
        autoVenta.vendido =true;
        return autoVenta;
      }
   },
   autosParaLaVenta: function(){
      return this.autos.filter((element) => element.vendido == false);
   },
   autosNuevos: function(){
      return this.autosParaLaVenta().filter((element) => element.km < 100);
   },
   listaDeVentas: function(){
      let vendidos = this.autos.filter((element) => element.vendido == true);
    let venta = [];
    vendidos.map(function(element){
    	venta.push(element.precio)
    });
    return venta;
   },
   totalDeVentas: function(){
      
      return this.listaDeVentas().reduce((acum, num) => acum + num,0);
   },
   puedeComprar:function(auto, persona){
      let cuota = auto.precio/auto.cuotas;
      if(auto.precio < persona.capacidadDePagoTotal && cuota < persona.capacidadDePagoEnCuotas ){
      	return true;
      } else {
      	return false;
      }
   },
   autosQuePuedeComprar: function(persona){
      return this.autosParaLaVenta().filter(element=>this.puedeComprar(element,persona));
     	
   },
};

console.log(concesionaria.buscarAuto('APL123'));