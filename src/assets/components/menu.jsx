import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container text-center">
      <div className="row justify-content-around p-3">
      <ul id="menu">
      <li>
        <Link to="/contacto">Contacto</Link>
      </li>
      <li>
        <Link to="/quienes-somos">Quienes somos</Link>
      </li>
      <li>
        <Link to="/catalogo">Productos</Link>
      </li>
      <li>
        <a href="#">Preguntas frecuentes</a>
      </li>
      <li>
        <a href="#">Politica de reembolsos</a>
      </li>
    </ul>
      </div>
    </div> 
    
  );
};

export default Menu;
