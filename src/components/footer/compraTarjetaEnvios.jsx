import React from 'react';
import CompraTarjetaEnviosCards from './compraTarjetaEnviosCards';
import '../../assets/css/Footer.css';
import imagenCompra from '../../assets/image/Footer/compra.webp';
import imagenTarjetaCredito from '../../assets/image/Footer/pagos.webp';
import imagenEnvio from '../../assets/image/Footer/envios.webp';


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
