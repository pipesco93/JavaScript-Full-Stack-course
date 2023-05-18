import React from 'react'
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import img from '../assets/images/logo-movies.svg'

const MovieItem = ({title, cifra, logo}) => {

    // const [state, setState ] = useState([]);

    // const apiInfo  = async () => {
    //     const json = await axios.get('http://localhost:3001/api/products')
    //     //console.log(json)
    //     setState(json.data)
    // };

    // useEffect(() => {
    //     apiInfo();
    // }, []);
    // console.log(state)

    return (
        <div className='contentRow'>
            <ul>
                <li key = "{key} "className='row-movies'>
                    <div className='titu-logo'>
                        <h2>{title} </h2>
                        <p>{cifra}</p>
                    </div>
                    <img className='logo' src={img} alt="" />
                </li>
            </ul>
        </div>
    )
}

export default MovieItem;