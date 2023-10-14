import React from 'react';
import FooterEnviosTarjeta from './Footer-Envios-tarjeta';
import compra from '../image/Footer/compra.png';
import pagos from '../image/Footer/pagos.png';
import envios from '../image/Footer/envios2.png';
import '../css/Footer.css';

const FooterEnvios = () => {
    const leyendas = [{
        tituloUno: "hacemos envios",
        tituloDos: "a todo el pais"},
        {
        tituloUno: "pagá con todas tus tarjetas de crédito",
        tituloDos: "..."},
        {
        tituloUno: "envios gratis",
        tituloDos: "a caba y gba desde $5000.-"}
    ]
    return (
        <>
            <FooterEnviosTarjeta imagen={compra} tituloUno={leyendas[0].tituloUno} tituloDos={leyendas[0].tituloDos} />
            <FooterEnviosTarjeta imagen={pagos} tituloUno={leyendas[1].tituloUno} tituloDos={leyendas[1].tituloDos} />
            <FooterEnviosTarjeta imagen={envios} tituloUno={leyendas[2].tituloUno} tituloDos={leyendas[2].tituloDos} />
        </>
    );
}

export default FooterEnvios;
