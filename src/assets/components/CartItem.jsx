import React, { Fragment, useReducer } from "react";
import { imageProduct } from "../helpers/ImagesDirectory";

const CartItem = ({ item, removeItems, addToCart }) => {
  const { id, img, etiqueta, precio, cantidad, subtotal } = item;

  
 
    const initialState = {
      subtot : subtotal,
    };
  
    //Funcion reductora
    const ContadorReducer = (state, action) => {
      switch (action.type) {
        case "Incrementar":
          return { subtot: state.subtot + precio };
        case "Decrementar":
          return { subtot: state.subtot - precio };
        default:
          return state;
      }
    };  

    const [state, dispatch] = useReducer(ContadorReducer, initialState);

  
    const aumentarHandle = () => {
      dispatch({ type: "Incrementar" });
    };
  
    const decrementarHandle = () => {
      dispatch({ type: "Decrementar" });
    };

    function aumentar(){
      aumentarHandle();
      addToCart(id);
    };

    function reducir(){
      decrementarHandle();
      removeItems(id, false);
    };

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
                onClick={() => reducir()}
              >
                <i className="bi bi-dash-lg"></i>
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-outline-dark disabled ">
                <strong>{cantidad}</strong>
              </button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button
                type="button"
                className="btn btn-success"
                onClick={() => aumentar()}
              >
                <i className="bi bi-plus-lg"></i>
              </button>
            </div>
          </div>
          <div
            class="btn-group-vertical"
            role="group"
            aria-label="Vertical button group"
          >
            <div className="d-grid gap-3 col-6 mx-auto mt-2">
              <button type="button" className="btn btn-outline-dark disabled  ">
                <strong>Subtotal: $ {state.subtot}</strong>
              </button>
            </div>
            <div className="d-grid gap-3 col-6 mx-auto mt-2">
              <button
                type="button"
                className="btn btn-warning btn-md"
                onClick={() => removeItems(id, true)}
              >
                <i className="bi bi-trash3"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
