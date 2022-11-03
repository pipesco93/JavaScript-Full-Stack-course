let consumoKWH = 280;
let tarifaKWH = 100;

let mensaje = consumoKWH >= 300 ? `Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, en base al ajuste tarifario
(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),
cumplimos con informarle que se ha ajustado el total a pagar, que será de $${(consumoKWH*tarifaKWH)*1.2}` :
`Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, menor a 300kwh, no tiene aumeno de tarifa
 el total a pagar será de $${(consumoKWH*tarifaKWH)}`;

 console.log(mensaje);