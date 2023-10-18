import React from 'react';
import { Link } from 'react-router-dom'
import logo from "../image/logo.png";
import bolso from "../image/bolsoCompras.png";

const DesktopNavbar = () => {

    return (
    <div>
        <header>
            <nav>
                <div className='top-bar-container'>
                    <div className='desktop-search-container'>
                        <input className='desktop-search' placeholder='Buscar'></input>
                    </div>
                    <div className='top-bar-button-container'>
                        <div><a><Link to="/singin">Crear Cuenta</Link></a></div>
                        <div><a><Link to="/Login">Iniciar Sesion</Link></a></div>
                    </div>
                </div>
                <div className='bot-bar-container'>
                    <div className="logo-container">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="desktop-navbar-container">
                        <div className="navbar-button-container">
                            <div className='button-desktop-navbar'><a><Link to="/">Inicio</Link></a></div>
                            <div className='button-desktop-navbar'><a><Link to="">Productos</Link></a></div>
                            <div className='button-desktop-navbar'><a><Link to="">Quienes Somos</Link></a></div>
                            <div className='button-desktop-navbar'><a><Link to="/">Contacto</Link></a></div>
                        </div>
                    </div>
                    <div className="carrito-container space-between">
                        <a href="/carrito">
                        <div className="carrito">
                            <div className="carrito-item-cont">
                            <img src={bolso} alt="bolso compras" className="carrito-compras" />
                            <span className="cont">0</span>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    </div>
    );
}

export default DesktopNavbar;
