import React from 'react';
import '../css/Footer.css'
import CompraTarjetaEnvios from '../components/footer/compraTarjetaEnvios';
import NoticiasRedesContacto from '../components/footer/noticiasRedesContacto';
import Menu from '../components/footer/menu';


const Footer = () => {
    return (
        <footer>
            <section id='compraTarjetaEnvios'>
                <CompraTarjetaEnvios />
            </section>
            <section id='noticiasRedesContacto'>
                <NoticiasRedesContacto />
            </section>
            <section id='menuFooter'>
                <Menu />
            </section>
            <section id='dataFiscal'>
                <img src='https://www.afip.gob.ar/images/f960/DATAWEB.jpg' />
            </section>
            <section id='copyright'>
                copyright
            </section>
        </footer>
    );
}

export default Footer;
