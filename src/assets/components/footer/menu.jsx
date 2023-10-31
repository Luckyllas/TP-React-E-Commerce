import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul id="menu">
      <li>
        <Link to="/contacto">contacto</Link>
      </li>
      <li>
        <Link to="/quienes-somos">quienes somos</Link>
      </li>
      <li>
        <Link to="/catalogo">productos</Link>
      </li>
      <li>
        <a href="#">preguntas frecuentes</a>
      </li>
      <li>
        <a href="#">politica de reembolsos</a>
      </li>
    </ul>
  );
};

export default Menu;
