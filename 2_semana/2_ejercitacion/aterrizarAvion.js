//La velocidad debe estar comprendida entre 268 a 278 km/hr.
//La altura debe estar comprendida entre 150 m a 300 m.

// Parametros variables
let altura = 400;
let velocidad = 270;

// Parametros de aterrizaje 
let altMax = 300;
let altMin = 150;
let velMax = 278;
let velMin = 268;

//Verificación de parametros
let pruebaAltura = altura >= altMin && altura <= altMax ? true : false;
let pruebaVelocidad = velocidad >= velMin && velocidad <= velMax ? true : false;

//Resulatado 
let pruebaAterriza = pruebaAltura && pruebaVelocidad ? "El avion puede aterrizar" : "Elavion no puede aterrizar";
console.log(pruebaAterriza);