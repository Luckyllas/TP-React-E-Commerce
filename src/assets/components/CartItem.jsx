import React, { Fragment } from "react";
import { imageProduct } from "../helpers/ImagesDirectory";

const CartItem = ({ item, removeItems, addToCart }) => {
  const { id, img, etiqueta, precio, cantidad } = item;

  return (
    <Fragment key={id}>
      <div className=" col-auto">
        <div className="card">
          <img
            src={imageProduct(`./${img}`)}
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
                <div
                  className="btn-toolbar justify-content-md-center"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div
                    className="btn-group me-2"
                    role="group"
                    aria-label="First group"
                  >
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => removeItems(id, false)}
                    >
                      <i className="bi bi-dash-lg"></i>
                    </button>
                  </div>
                  <div
                    className="btn-group me-2"
                    role="group"
                    aria-label="Second group"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-dark disabled "
                    >
                      <strong>{cantidad}</strong>
                    </button>
                  </div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Third group"
                  >
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => addToCart(id)}
                    >
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-grid gap-3 col-3 mx-auto">
                  <button
                    type="button"
                    className="btn btn-warning btn-md"
                    onClick={() => removeItems(id, true)}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </li>
            </ul>
          </figcaption>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
