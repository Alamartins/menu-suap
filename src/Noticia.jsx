import {useState} from 'react';
import styles from './Noticia.css';
function Noticia({horario, desc}){

    return(
        <div class='card'>
            <p className='data'>{horario}</p>
            <p className='desc'>{desc}</p>
        </div>
    );
}

export default Noticia;