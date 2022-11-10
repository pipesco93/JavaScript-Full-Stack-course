// Crear un array multidimensional que contenga los 
// nombres de los cursos y suprecio en pesos:
let cursosDH = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]];

// Crear un array que contenga los cursos que el alumno quiere tomar con DH.
// Deben estar escritos en MAYÚSCULAS y el alumno puede seleccionar entre
// HTML5, CSS3, JAVASCRIPT, REACT y NODEJS.
let cursosElegidos = ["REACT", "JAVASCRIPT", "CSS3", "HTML5"];

// Crear una función (Callback) que reciba como parámetros el array
// multidimensional de los cursos y el otro array que indica los cursos que
// quiere hacer el alumno. La función tendrá la responsabilidad de calcular y
// devolver el monto total a pagar por el alumno en función de los cursos que
// quiere realizar
function calculoPago (listaCursos, cursosEstudiante) {
    let pago = 0;
    for (let i = 0; i < cursosEstudiante.length; i++){
        for (let j = 0; j < listaCursos.length; j++){
            if (cursosEstudiante[i].toLowerCase() == listaCursos[j][0]){
                pago = pago + listaCursos[j][1];
            }
        }
    }
    return pago;
}

// Crear otra función que reciba como parámetros el nombre y el apellido del
// alumno, el array multidimensional de los cursos con sus respectivos
// precios y el array que contiene qué cursos quiere hacer el alumno. Esta
// función tendrá la responsabilidad de retornar el nombre y el apellido del
// alumno y el monto total a pagar
function mensajePago (nombre, apellido, cursosDH, cursosTomados, callback) {
    let monto = callback(cursosDH, cursosTomados);
    let mensaje = `Estimado ${nombre} ${apellido}, en función de los cursos seleccionados:\n`;

    for (let i = 0; i < cursosTomados.length; i++) {
        mensaje = mensaje + `\n${i+1}.- ${cursosTomados[i]}`;
    }

    mensaje = mensaje + `\n\nEl monto total a pagar es de: $${monto}.\nBienvenido a la gran aventura Digital House.`;
    return mensaje;
}


console.log(mensajePago("Felipe", "Escobar", cursosDH, cursosElegidos, calculoPago));