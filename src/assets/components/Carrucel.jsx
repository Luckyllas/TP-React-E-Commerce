import React from "react";
import { imageCarrucel } from "../helpers/ImagesDirectory";

const Carrucel = () => {
  return (
    <div
      id="carousel-principal"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carousel-principal"
          className="active"
          aria-current="true"
          data-bs-slide-to="0"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel-principal"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel-principal"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1000">
          <img
            src={imageCarrucel(`./${1}.webp`)}
            className="d-block w-100"
            alt="img1"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src={imageCarrucel(`./${2}.webp`)}
            className="d-block w-100"
            alt="img2"
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src={imageCarrucel(`./${3}.webp`)}
            className="d-block w-100"
            alt="img3"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel-principal"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel-principal"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};

export default Carrucel;
