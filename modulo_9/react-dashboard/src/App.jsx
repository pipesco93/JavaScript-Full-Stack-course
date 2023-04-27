import React, { Component } from 'react'
import './App.css'
import Pelicula from './components/Pelicula'
import ContentRowMovies from './components/ContentRowMovies'

function App() {
  return (
    <div className="App">
      <main>
        {/* <Pelicula
        //titulo = "Titulo de pelicula aqui"
          texto = "Soy una pelicula!"
          masGeneros = {["Romance", "Animada", "Documental"]}
        >
          <h2>Este es un children</h2>
        </Pelicula> */}
        <ContentRowMovies />

      </main>
    </div>
  )
}

export default App
