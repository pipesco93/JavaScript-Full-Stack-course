window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let logo = document.querySelector('img');
    let btnAdd = document.querySelector('.botonAgregar')

    logo.addEventListener('mouseover', () =>{
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    });

    logo.addEventListener('mouseout', () =>{
        body.style.backgroundColor = '#ffffff'
        body.classList.add('fondoMoviesList');
    });

    btnAdd.addEventListener('mouseover', () =>{
        btnAdd.style.color = "blue";
    });

    btnAdd.addEventListener('mouseout', () =>{
        btnAdd.style.color = "white";
    });
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}