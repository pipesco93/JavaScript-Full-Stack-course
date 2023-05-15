import React from 'react'
import PropTypes from 'prop-types';

const MovieItem = ({title, cifra, logo}) => {
    return (
        <div className='contentRow'>
            <ul>
                <li key = "{key} "className='row-movies'>
                    <div className='titu-logo'>
                        <h2>{title} </h2>
                        <p>{cifra}</p>
                    </div>
                    <img className='logo' src={logo} alt="" />
                </li>
            </ul>
        </div>
    )
}

export default MovieItem;