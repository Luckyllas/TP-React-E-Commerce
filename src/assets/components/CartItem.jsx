import React, { Fragment } from "react";

const CartItem = ({ item, removeItems, addToCart }) => {
  const { id, img, etiqueta, precio, cantidad } = item;

  return (
    <tbody>
      <Fragment key={id}>
      <tr>      
        <td>
          <img src={img} className="card-img-top" alt={etiqueta} />
        </td>
        <td>{etiqueta}</td>
        <td>$ {precio}</td>
        <td>
          <button
            type="button"
            className="btn btn-outline-secondary btn btn-light btn-sm mb-3"
            onClick={() => removeItems(id, false)}
          >
            <i className="bi bi-dash-lg"></i>
          </button>
        </td>
        <td>{cantidad}</td>
        <td>
          <button
            type="button"
            className="btn btn-outline-secondary btn btn-light btn-sm mb-3"
            onClick={() => addToCart(id)}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
        </td>
        <td>         
          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={() => removeItems(id, true)}
          >
            <i className="bi bi-trash3"></i>
          </button>
        </td>
      </tr>
      </Fragment>
    </tbody>
  );
};

export default CartItem;
