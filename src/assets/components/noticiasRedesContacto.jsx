import React from "react";
import "../css/Footer.css";
import instagram from "../image/Footer/instagram.webp";
import facebook from "../image/Footer/facebook.webp";
import mail from "../image/Footer/eMail.webp";

const NoticiasRedesContacto = () => {
  return (
    <div className="container text-center ">
      <div className="row justify-content-around ">
        <div className="col mt-4" >
          <h4>Noticias</h4>
          <form>
            <input value="Nombre/name" />
            <input value="email" />
            <button className="mt-4" id="botonEnviar">Registrate</button>
          </form>
        </div>
        <div className="col mt-4">
          <h4>redes sociales</h4>
          <img id="imagenCard" src={instagram} alt="imgCar" />
          <img id="imgFace" src={facebook} alt="Facebook" />
          <img id="imagenCard" src={mail} alt="Mail" />
        </div>
        <div className="col mt-4">
          <h4>contáctanos</h4>
          <section>teléfono email</section>
          <section>dirección</section>
        </div>
      </div>
    </div> 
  );
};

export default NoticiasRedesContacto;
