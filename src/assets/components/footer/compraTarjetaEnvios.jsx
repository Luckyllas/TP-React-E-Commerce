import React from 'react';
import CompraTarjetaEnviosCards from './compraTarjetaEnviosCards';
import '../../css/Footer.css';
import imagenCompra from '../../image/Footer/compra.webp';
import imagenTarjetaCredito from '../../image/Footer/pagos.webp';
import imagenEnvio from '../../image/Footer/envios.webp';

const CompraTarjetaEnvios = () => {

    return (
        <>
            <CompraTarjetaEnviosCards imagen={imagenCompra} tituloUno="hacemos envios" tituloDos="a todo el pais" />
            <CompraTarjetaEnviosCards imagen={imagenTarjetaCredito} tituloUno="paga con todas tus tarjetas de crédito" tituloDos="" />
            <CompraTarjetaEnviosCards imagen={imagenEnvio} tituloUno="envios gratis" tituloDos="a caba y gba desde $5000" />
        </>
    );
}

export default CompraTarjetaEnvios;
