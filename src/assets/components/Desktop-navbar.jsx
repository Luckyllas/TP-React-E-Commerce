import React from "react";
import logo from "../image/logo.png";
import bolso from "../image/bolsoCompras.png";
import { Link } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <header className="burguerBar">
      <nav>
        <div className="top-bar-container">
          <div className="desktop-search-container">
            <input className="desktop-search" placeholder="Buscar"></input>
          </div>
          <div className="top-bar-button-container">
            <div>Crear Cuenta</div>
            <div>Iniciar Sesion</div>
          </div>
        </div>
        <div className="bot-bar-container">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="desktop-navbar-container">
            <div className="navbar-button-container">
              <div className="button-desktop-navbar">
                <Link to="/" className="link">
                  Inico
                </Link>
              </div>
              <div className="button-desktop-navbar">
                <Link to="/Catalogo" className="link">
                  Vinos Argentinos
                </Link>
              </div>
            </div>
          </div>
          <div className="carrito-container space-between">
            <Link to="/Cart" className="link">              
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
  );
};

export default DesktopNavbar;
