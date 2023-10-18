import React from "react";
import instagram from "../../image/Footer/instagram.webp";
import facebook from "../../image/Footer/facebook.webp";
import mail from "../../image/Footer/eMail.webp";

const NoticiasRedesContactoRedes = () => {
  return (
    <div id="margenesContacto">
      <h4>redes sociales</h4>
      <img id="imagenCard" src={instagram} alt="imgCar" />
      <img id="imgFace" src={facebook} alt="Facebook" />
      <img id="imagenCard" src={mail} alt="Mail" />
    </div>
  );
};

export default NoticiasRedesContactoRedes;
