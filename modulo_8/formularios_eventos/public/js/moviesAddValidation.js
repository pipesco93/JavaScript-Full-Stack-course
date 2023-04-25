window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//

let title = document.querySelector('#title');
let rating = document.querySelector('#rating');
let awards = document.querySelector('#awards');
let releaseDate = document.querySelector('#release_date');
let length = document.querySelector('#length')



title.addEventListener('focus', () => {
    title.style.backgroundColor = 'pink'
    title.setAttribute ("placeholder", "Titulo de Peli");
});

}