import React from 'react';
import CompraTarjetaEnviosCards from './compraTarjetaEnviosCards';
import '../../css/Footer.css';

const CompraTarjetaEnvios = () => {
    return (
        <>
            <CompraTarjetaEnviosCards imagen="imagen" tituloUno="hacemos envios" tituloDos="a todo el pais" />
            <CompraTarjetaEnviosCards imagen="imagen" tituloUno="paga con todas tus tarjetas de crédito" tituloDos="" />
            <CompraTarjetaEnviosCards imagen="imagen" tituloUno="envios gratis" tituloDos="a caba y gba desde $5000" />
        </>
    );
}

export default CompraTarjetaEnvios;
