let nombre = "Felipe";
let apellido = "Escobar";
let sueldoActual = 1000;
let porcentajeDeAumento = 15;

let calculoAumento = (sueldoActual*porcentajeDeAumento/100);

let nuevoSueldo = calculoAumento + sueldoActual;

console.log("Hola, " + nombre  + "\nEn base  su sueldo actual: \n" + sueldoActual + "\nHa recibido un aumento del " + porcentajeDeAumento + "%:\n$" + calculoAumento + "\ny su nuevo sueldo es de: $" + nuevoSueldo);

// Otra forma para crear las variables

let datosEmpleado = {
    Nombe : "Felipe",
    Apellido :"Escobar"

}

console.log(datosEmpleado.Nombe)

// Y sando acentro grave (tilde al reves) puedo hacer el consol log mas facil  puedo hacer saltos solo con enter y usar las  variables ${variable}