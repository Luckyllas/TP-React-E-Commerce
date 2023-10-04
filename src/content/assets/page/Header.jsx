import React from "react";
import "../css/Header.css";
import logo from "../image/logo.png";
import bolso from "../image/bolsoCompras.png";

const NavBar = () => {

  
  return (
    <header>
      <nav className="top-bar">        
        <div className="header-container justify-center">
          <div className="menu-logo">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="header-container space-between">
          <a href="/carrito">
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
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
