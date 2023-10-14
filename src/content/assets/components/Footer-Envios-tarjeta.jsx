import React from 'react';
import '../css/Footer.css';

const FooterEnviosTarjeta = (props) => {
    return (
        <section className='tarjeta'>
            <img className='imagenes' src={props.imagen} /><br />
            <span className='tituloUno'>{props.tituloUno}</span><br />
            <span className='tituloDos'>{props.tituloDos}</span>
        </section>
    );
}

export default FooterEnviosTarjeta;
