import React, { useEffect, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/CartReducer";
import Product from "../components/Product";
import TituloCatalogo from "../components/TituloCatalogo";
import { TYPES } from "../actions/Types";
import axios from "axios";

const Catalogo = () => {
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

    const nuevoProducto = state.products.find((product) => product.id === id);

    const productoCart = state.cart.find(
      (item) => item.id === nuevoProducto.id
    );

    if (productoCart) {
      let total = productoCart.cantidad + 1;
      let subtotalPagar =total * productoCart.precio;

      await axios.put("http://localhost:8080/carrito/" + productoCart.id, {
        ...productoCart,
        cantidad: total,
        subtotal:subtotalPagar,
      });
      console.log(subtotalPagar);
    } else {
      await axios.post("http://localhost:8080/carrito", {
        ...nuevoProducto,
        cantidad: 1,
        subtotal: nuevoProducto.precio,
      });
     }    
  }; // funcion de agregar un producto al carrito

  return (
    <div className="container">
      <TituloCatalogo />
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4  justify-content-center">
        {state.products.map((producto) => (
          <Product key={producto.id} product={producto} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
