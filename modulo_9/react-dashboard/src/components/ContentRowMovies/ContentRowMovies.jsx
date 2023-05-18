import React from 'react';
import './contentRow.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import data from '../../assets/data';
import MovieItem from '../MovieItem';
import { useState, useEffect } from 'react';
import axios from 'axios';


const propsCajas = () => {

    const [state, setState ] = useState({});

    const apiInfo  = async () => {
        const json = await axios.get('http://localhost:3001/api/products')
        //console.log(json)
        setState(json.data);
    };

    useEffect(() => {
        apiInfo();
        
    }, []);

    //const {destacado} = state.countByCategory;
    console.log(state.countByCategory?.destacado)
    //console.log(state.countByCategory);

    data[0].cifra = state.count;
    data[1].cifra = state.countByCategory?.destacado;
    data[2].cifra = state.countByCategory?.noDestacado;

    return (
        <div>
            {
                data.map((e,i) => {
                    return (
                        <MovieItem title = {e.titulo} cifra = {e.cifra} logo = {e.icono} key = {i} />
                    )
                })
            }
        </div>
        // <div className='contentRow'>
        //     <ul>
        //         {data.map((e, i) =>
        //         <li key={e+i} className='row-movies'>
        //             <div className='titu-logo'>
        //                 <h2>{e.titulo} </h2>
        //                 <p>{e.cifra}</p>
        //             </div>
        //             <img className='logo' src={e.icono} alt="" />
        //         </li>
        //         )}
        //     </ul>
        // </div>
    )
}

export default propsCajas;