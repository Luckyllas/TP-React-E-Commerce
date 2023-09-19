import React from "react";
import "../css/TituloCatalogo.css";
import { Link } from "react-router-dom";


const TituloCatalogo = () => {
  return (
    <div className="titulo-container">
      <div className="breadrumbs">
        <Link to="/" className="link">Inicio </Link>
        <span className="subtitulo">/ Vinos Argentinos</span>
      </div>
      <div className="subtitulo-container">
        <h1>Vinos Argentinos</h1>
      </div>
    </div>
  );
};

export default TituloCatalogo;
