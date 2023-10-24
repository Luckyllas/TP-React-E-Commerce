import React, { Fragment } from "react";
import "../css/Product.css";
import { imageProduct } from "../helpers/ImagesDirectory";

const Product = ({ product, addToCart }) => {
  const { id, img, precio, etiqueta } = product;

  return (
    <Fragment key={id}>
      <div className="col w-200">
        <div className="card">
          <img
            src={imageProduct(`./${img}`)}
            alt={etiqueta}
            className="card-img-top"
          />
          <div className="card-body w-100">
            <p className="card-title">{etiqueta}</p>
          </div>
          <div className="card-body w-80 row align-items-center">
            <h4 className="card-text col">$ {precio}</h4>
            <button
              type="button"
              className="btn btn-outline-light btn-lg col-3 pb-3"
              onClick={() => addToCart(id)}
            >
              <i className="bi bi-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
