import React, { useState } from "react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const BurgerNavbar = () => {
  const [estado, setEstado] = useState("");

  const activarNavbarHandler = () => setEstado("Activado");
  const desactivarNavbarHandler = () => setEstado("Desactivado");

  return (
    <div>
      <header>
        <div className="burger-navbar">
          <nav>
            <div className="top-burger-navbar-container">
              <button
                className="abrir-navbar"
                style={{
                  visibility: estado === "Activado" ? "hidden" : "visible",
                }}
                onClick={activarNavbarHandler}
              >
                Menu
              </button>
              <div className="burger-search-container"></div>
            </div>
            <div className="bot-burger-navbar-container">
              <div className="button-burger-navbar">
                <Link to="/">Inicio</Link>
              </div>
              <div className="button-burger-navbar">
                <Link to="Catalogo">Productos</Link>
              </div>
              <div className="button-burger-navbar">
                <Link to="/Cart">Carrito</Link>
              </div>
            </div>
            <div className="logo-container">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div
              className={
                estado === "Activado"
                  ? "burger-menu-container-visible"
                  : "burger-menu-container-hidden"
              }
            >
              <div className="burger-button-container">
                <button
                  className="cerrar-navbar"
                  onClick={desactivarNavbarHandler}
                >
                  Cerrar
                </button>
                <div>
                  <Link to="/Singin">Crear Cuenta</Link>
                </div>
                <div>
                  <Link to="/Login">Iniciar Sesion</Link>
                </div>
                <div>
                  <Link to="/Quienes-Somos">Quienes Somos</Link>
                </div>
                <div>
                  <Link to="/contacto">Contacto</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default BurgerNavbar;
