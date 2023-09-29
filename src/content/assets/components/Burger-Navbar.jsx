import React, { useState } from 'react';
import logo from "../image/logo.png";

const BurgerNavbar = () => {

    const [estado, setEstado] = useState('');

    const activarNavbarHandler = () => setEstado('Activado');
    const desactivarNavbarHandler = () => setEstado('Desactivado');

    return (
        <div>
        <header>
            <div className="burger-navbar">
                <nav>
                    <div className='top-burger-navbar-container'>
                        <button className='abrir-navbar' style={{visibility: estado==="Activado" ? "hidden" : "visible"}} onClick={activarNavbarHandler}>Abrir</button>
                        <div className='burger-search-container'>
                            <input className='burger-search' placeholder='Buscar'></input>
                        </div>
                    </div>
                    <div className='bot-burger-navbar-container'>
                        <div className='button-burger-navbar'>Inicio</div>
                        <div className='button-burger-navbar'>Productos</div>
                        <div className='button-burger-navbar'>Carrito</div>
                    </div>
                    <div className="logo-container">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={estado==="Activado" ? "burger-menu-container-visible" : "burger-menu-container-hidden"}>
                        <button className='cerrar-navbar'onClick={desactivarNavbarHandler}>Cerrar</button>
                        <div className='burger-button-container'>
                            <div>Inicio</div>
                            <div>Productos</div>
                            <div>Quienes Somos</div>
                            <div>Contacto</div>
                            <div>Iniciar Sesion</div>
                            <div>Registrarse</div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        </div>
    );
}

export default BurgerNavbar;
