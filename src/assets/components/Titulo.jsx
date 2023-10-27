import React from "react";
import "../css/Titulo.css";

const TituloPrincipal = ({ titulo }) => {
  return (
    <div className="titulo-container">
      <div className="subtitulo-container">
        <h1>{ titulo }</h1>
      </div>
    </div>
  );
};

export default TituloPrincipal;