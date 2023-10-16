import React from 'react';

const CompraTarjetaEnviosCards = (props) => {
    return (
        <section  className='muestraEnLineaContacto'>
            {props.imagen}
            <br />
            {props.tituloUno}
            <br />
            {props.tituloDos}
            <br />
        </section>
    );
}

export default CompraTarjetaEnviosCards;
