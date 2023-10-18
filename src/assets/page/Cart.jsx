import React, { useReducer, useEffect } from "react";
import CartItem from "../../components/CartItem";
import { cartInitialState, cartReducer } from "../reducers/CartReducer";
import { TYPES } from "../actions/Types";
import axios from "axios";

const Cart = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const updateProducts = async () => {
    const productsUrl = "http://localhost:8080/productos";
    const cartUrl = "http://localhost:8080/carrito";

    const productResponse = await axios.get(productsUrl);
    const cartResponse = await axios.get(cartUrl);

    const productsData = productResponse.data;
    const cartData = cartResponse.data;

    dispatch({ type: TYPES.READ_STATE, payload: [productsData, cartData] });
  };
  useEffect(() => {
    updateProducts();
  }, []);

  const addToCart = async (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });

    const productoCart = state.cart.find((item) => item.id === id);

    let total = productoCart.cantidad + 1;

    await axios.put("http://localhost:8080/carrito/" + productoCart.id, {
      ...productoCart,
      cantidad: total,
    });
  };

  const removeItems = async (id, eliminarTodo) => {
    if (eliminarTodo) {
      dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });

      let productoCart = state.cart.find((item) => item.id === id);

      let total = productoCart.cantidad - 1;

      await axios.put("http://localhost:8080/carrito/" + productoCart.id, {
        ...productoCart,
        cantidad: total,
      });
      productoCart = state.cart.find((item) => item.id === id);
      console.log("antes del if " + productoCart.cantidad);
      if (productoCart.cantidad === 1) {
        console.log(productoCart.cantidad);
        axios.delete("http://localhost:8080/carrito/" + productoCart.id);
      }
    }
  }; // remueve un item del carrito

  const clearToCart = async () => {
    const confirm = window.confirm("¿Estas seguro de vaciar el carrito?");
    if (confirm) {
      dispatch({ type: TYPES.CLEAR_TO_CART });
    }
  }; //vacia el carrito

  return (
    <div className="container-fluid">
      <h2>Carrito de Compras</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4  justify-content-center">
        {state.cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeItems={removeItems}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div>
        {state.cart.length > 0 && (
          <button onClick={clearToCart} className="btn btn-danger btn-sm">
            Vaciar Carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
