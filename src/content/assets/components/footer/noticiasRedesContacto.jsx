import React from 'react';
import '../../css/Footer.css';
import NoticiasRedesContactoNewsletter from './noticiasRedesContactoNewsletter';
import NoticiasRedesContactoRedes from './noticiasRedesContactoRedes';
import NoticiasRedesContactoContactanos from './noticiasRedesContactoContactanos';

const NoticiasRedesContacto = () => {
    return (
        <div className='muestraEnLineaNoticias'>
            <NoticiasRedesContactoNewsletter />
            <NoticiasRedesContactoRedes />
            <NoticiasRedesContactoContactanos />
        </div>
    );
}

export default NoticiasRedesContacto;
