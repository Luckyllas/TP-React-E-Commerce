import React from 'react';
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
                        <div>Crear Cuenta</div>
                        <div>Iniciar Sesion</div>
                    </div>
                </div>
                <div className='bot-bar-container'>
                    <div className="logo-container">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="desktop-navbar-container">
                        <div className="navbar-button-container">
                            <div className='button-desktop-navbar'>Inicio</div>
                            <div className='button-desktop-navbar'>Productos</div>
                            <div className='button-desktop-navbar'>Quienes Somos</div>
                            <div className='button-desktop-navbar'>Contacto</div>
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
