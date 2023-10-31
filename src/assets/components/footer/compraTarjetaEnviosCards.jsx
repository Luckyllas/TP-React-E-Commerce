import React from "react";

const CompraTarjetaEnviosCards = (props) => {
  return (
    <section className="muestraEnLineaContacto">
      <img id="imagenCard" src={props.imagen} alt="tarjetas" />
      <br />
      {props.tituloUno}
      <br />
      {props.tituloDos}
      <br />
    </section>
  );
};

export default CompraTarjetaEnviosCards;
