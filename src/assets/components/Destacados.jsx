import React, { Fragment } from "react";
import { destacado } from "../dataBase/Destacados";

import "../css/Destacados.css";

const Destacados = () => {
  return (
    <section className="conteiner-fluid">
      <div className="row row-cols-1 row-cols-md-2  justify-content-center">
        {destacado.map((item) => (
          <Fragment key={item.id}>
            <div className=" col-auto">
              <div className="card">
                <a href="/">
                  <img src={item.img} alt={item.id} className="card-image" />
                </a>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Destacados;
