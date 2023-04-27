import React, { Component } from 'react'
import propTypes from 'prop-types'

function Pelicula (props) {

    let generos = ["Accion", "Drama", "Comedia"]

    return(
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.texto}</h3>
            <ul>
                {generos.map((e, i) => <li key={e + i}>{e}</li>)}
            </ul>
            {props.children}
            <ul>
                {props.masGeneros.map((e, i)=> <li key={e + i}>{e}</li>)}
            </ul>
        </div>
    )
}

//Defino las prop types
Pelicula.propTypes = {
    titulo: propTypes.string
}

//Defino los valores por defecto
Pelicula.defaultProps = {
    titulo: "Aqui va el Titulo 'Harry Potter'",
    texto: "Descripcion de la pelicula"
}

export default Pelicula;