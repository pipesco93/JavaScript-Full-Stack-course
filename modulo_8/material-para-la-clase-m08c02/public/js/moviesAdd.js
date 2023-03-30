window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let formtitle = document.querySelector('#titulo');
    let estadoSecreto = 0;
    let clave = "secret"

    formtitle.addEventListener('keydown', (e) => {
        if(e.key == clave[0]){
            estadoSecreto = 1
        }
        
        console.log(formtitle.value)
    });

}