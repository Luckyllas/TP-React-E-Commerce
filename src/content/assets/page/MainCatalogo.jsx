import React from "react";

import { catalogo } from "../data/Catalogo";
import { Fragment } from "react";
import "../css/MainCatalogo.css";
import TituloCatalogo from "../components/TituloCatalogo";

const MainCatalogo = () => {
  return (
    <main>
      <section className="conteiner-fluid">
      <TituloCatalogo />
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4  justify-content-center">
          {catalogo.map((item) => (
            <Fragment key={item.id}>
              <div className=" col-auto">
                <div className="card">
                  <img
                    src={item.img}
                    alt={item.titulo}
                    className="card-image"
                  />
                  <figcaption>
                    <ul className="card-data">
                      <li>
                        <span className="card-data-titulo">
                          {item.etiqueta}
                        </span>
                      </li>
                      <li>
                        <span className="card-data-precio">${item.precio}</span>
                      </li>
                      <li>
                        <button className="card-button-compra">
                          Agregar al Carrito
                        </button>
                      </li>
                    </ul>
                  </figcaption>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainCatalogo;
