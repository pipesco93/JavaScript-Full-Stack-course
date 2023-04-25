let h2 = document.querySelector('.subtitulo');
let a = document.querySelector('a');
let p = document.querySelector('p');


let nombre = prompt('Ingrese su nombre:')

if(nombre) {
    h2 = h2.innerText += nombre
    document.write(h2)
}else {
    h2 = h2.innerText += " Invitado"
}

document.querySelector('.container').style.display = "block";

