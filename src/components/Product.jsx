import React, { Fragment } from "react";
import "../assets/css/Product.css";
import { imageProduct } from "../assets/helpers/ImagesDirectory";
//import image from "../image/Productos/achavalQuimera.png"

const Product = ({ product, addToCart }) => {
  const { id, img, precio, etiqueta } = product;

  

  return (
    <Fragment key={id}>
      <div className=" col-auto">
        <div className="card">
          <img
            src={imageProduct(`./${ img }`)}
            alt={etiqueta}
            className="card-image"
          /> 
          <figcaption>
            <ul className="card-data">
              <li>
                <span className="card-data-titulo">{etiqueta}</span>
              </li>
              <li>
                <span className="card-data-precio">$ {precio}</span>
              </li>
              <li>
                <button
                  onClick={() => addToCart(id)}
                  className="card-button-compra"
                >
                  Agregar al Carrito
                </button>
              </li>
            </ul>
          </figcaption>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
