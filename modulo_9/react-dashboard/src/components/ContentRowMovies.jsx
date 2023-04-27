import React from 'react';
import PropTypes from 'prop-types';
import logoMovies from '../../src/assets/images/logo-movies.svg'
import logoAward from '../../src/assets/images/logo-awards.svg'
import logoActors from '../../src/assets/images/logo-actors.svg'

const propsCajas = () => {
    const data =[
        {
            titulo: "MOVIES IN DATABASE",
            borderColor: "blue",
            cifra: 21,
            icono: logoMovies
        },
        {
            titulo: "TOTAL AWARDS",
            borderColor: "green",
            cifra: 79,
            icono: logoAward
        },
        {
            titulo: "TOTAL ACTORS",
            borderColor: "yellow",
            cifra: 49,
            icono: logoActors
        }
    ]

    return(
        <div>
            <ul>
                {data.map((e, i) =>
                <li key={e+i} className='row-movies'>
                    <div className='titu-logo'>
                        <h2>{e.titulo}</h2>
                        <img src={e.icono}/>
                    </div>

                    <div>
                        <p>{e.cifra}</p>
                    </div>
                </li>
                )}
            </ul>
        </div>
    )
}

export default propsCajas;