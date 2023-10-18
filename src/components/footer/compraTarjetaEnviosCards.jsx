import React from 'react';
import "../../assets/css/Footer.css";

const CompraTarjetaEnviosCards = (props) => {
    return (
        <section className='muestraEnLineaContacto'>
            <img id='imagenCard' src={props.imagen} />
            <br />
            {props.tituloUno}
            <br />
            {props.tituloDos}
            <br />
        </section>
    );
}

export default CompraTarjetaEnviosCards;
