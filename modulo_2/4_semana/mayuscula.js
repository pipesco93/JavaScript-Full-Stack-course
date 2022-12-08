// Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
// de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
// las letras de la cadena de texto pero en MAYÚSCULA.

function stringToUpper (text) {
    for (let i = 0; i < text.length; i++) {
        console.log(text[i].toUpperCase())
    }
}

stringToUpper("practicando el uso de los ciclos o bucles")
