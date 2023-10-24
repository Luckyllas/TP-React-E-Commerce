import React from "react";
import "../css/Quienes-Somos.css";

const QuienesSomos = () => {
  return (
    <div>
      <h1>Quienes Somos</h1>
      <div className="img-container">
        <img
          src={require(`../image/quienes somos.jpg`)}
          alt=""
          className="img"
        />
      </div>
      <div className="text-container">
        <p className="text">
          <strong>Grand Cru</strong> surgió en1999. Comenzamos como una pequeña
          empresa importadora de vinos franceses de alta gama, con una oficina
          en la Avenida Pueyrredón en Capital Federal donde dictábamos cursos y
          degustaciones guiadas de vinos franceses. El desafío, primero, era
          culturizar y enseñar al público argentino sobre estas joyas de la
          vitivinicultura mundial. A su vez, empezamos a desarrollar una red de
          distribución en los mejores hoteles y restaurantes de Buenos Aires. En
          octubre de 2001 abrimos nuestro primer local al público en la Avenida
          Alvear, en Recoleta, para tener otra visibilidad y una mejor
          exposición, nuestro proyecto estaba creciendo y queríamos darlo a
          conocer al público. Pasaron ocho años y en noviembre de 2009,
          ampliamos nuestro espacio y nos mudamos a Rodríguez Peña 1886, a un
          espacio más grande y confortable que nos permitió mostrar el surtido y
          la amplia colección de vinos del mundo, etiquetas de ediciones
          limitadas, vinos de autor y las perlitas de nuestra cava. Actualmente
          tenemos la representación comercial de exclusivas bodegas de la
          Argentina que se combinan con un portfolio distinguido que incluye
          vinos referentes de los productores más importantes del Viejo y Nuevo
          Mundo. Luego de mas de 20 años estamos orgullosos del camino recorrido
          esperando poder seguir ofreciendo a nuestros clientes los mejores
          referentes de la vitivinicultura mundial. Salud!
        </p>
      </div>
    </div>
  );
};

export default QuienesSomos;