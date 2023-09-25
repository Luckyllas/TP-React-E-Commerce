import React, { useState } from "react";
import "../css/Header.css";
import logo from "../image/logo.png";

const Header = () => {

  const [estado, setEstado] = useState("");

  const activarNavbarHandler = () => setEstado("Activado");
  const desactivarNavbarHandler = () => setEstado("Desactivado");

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <nav>
          <button className="abrir-navbar" id="abrir" onClick={activarNavbarHandler}>Abrir</button>
          <div className="navbar-container" style={{opacity: estado==="Activado"? 1 : 0, visibility: estado==="Activado"? "visible" : "hidden"}} id="navbar-container">
            <button className="cerrar-navbar" id="cerrar" onClick={desactivarNavbarHandler}>Cerrar</button>
            <div className="left-navbar">
              <div>Inicio</div>
              <div>Productos</div>
              <div>Quienes Somos</div>
              <div>Contacto</div>
            </div>
            <div className="right-navbar">
              <div>Iniciar Sesion</div>
              <div>Registrarse</div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
