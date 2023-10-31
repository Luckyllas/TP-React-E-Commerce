import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import bolso from "../image/bolsoCompras.png";

const DesktopNavbar = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="top-bar-container ">
            <div className="top-bar-button-container">
              <div>
                <Link to="/Singin">Crear Cuenta</Link>
              </div>
              <div>
                <Link to="/Login">Iniciar Sesion</Link>
              </div>
            </div>
          </div>
          <div className="bot-bar-container row justify-content-center">
            <div className="logo-container">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="desktop-navbar-container">
              <div className="navbar-button-container">
                <div className="button-desktop-navbar">
                  <Link to="/">Inicio</Link>
                </div>
                <div className="button-desktop-navbar">
                  <Link to="Catalogo">Productos</Link>
                </div>
                <div className="button-desktop-navbar">
                  <Link to="/Quienes-Somos">Quienes Somos</Link>
                </div>
                <div className="button-desktop-navbar">
                  <Link to="/contacto">Contacto</Link>
                </div>
              </div>
            </div>
            <div className="carrito-container space-between">
              <Link to="/Cart">
                <div className="carrito">
                  <div className="carrito-item-cont">
                    <img
                      src={bolso}
                      alt="bolso compras"
                      className="carrito-compras"
                    />
                    <span className="cont">0</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default DesktopNavbar;
