import {useState} from 'react';
import styles from './Noticia.css';
function Noticia({name, desc, users, project}){

    return(
        <div class='card'>
            <p className='data'>{name}</p>
            <p className='desc'>{desc}</p>
            <p className='users'>{users}</p>
            <p className='project'>{project}</p>
        </div>
    );
}

export default Noticia;