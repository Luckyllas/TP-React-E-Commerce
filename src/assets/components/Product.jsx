import React, { Fragment } from "react";
import "../css/Product.css";
import { imageProduct } from "../helpers/ImagesDirectory";

const Product = ({ product, addToCart }) => {
  
  const { id, img, precio, etiqueta } = product; 

  return (
    <Fragment key={id}>
      <div className="card text-center mb-3 ">
        <img
          src={imageProduct(`./${img}`)}
          alt={etiqueta}
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-title">{etiqueta}</p>
        </div>
        <div className="card-body row align-items-center">
          <h5 className="card-text col">$ {precio}</h5>
          <button onClick={() => addToCart(id)} className="btn btn-ligh col-3 mb-2">
            <i className="bi bi-cart"></i>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
