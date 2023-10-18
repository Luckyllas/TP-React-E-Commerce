import { TYPES } from "../actions/Types";


export const cartInitialState = {
  products: [],
  cart: []
};

//state: es el estado en que se encuentra el componente
//action: es la accion que deseamos realizar
export const cartReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      //busco el item en la lista de productos y lo guardo en la variable newCartItem
      const newCartItem = state.products.find(
        (product) => product.id === action.payload
      );
      //busco si el producto esta en el carrito si no esta da null
      const itemCart = state.cart.find((item) => item.id === action.payload);

      return itemCart // si el item esta en el carrito:
        ? {
            ...state, //tomo el estado actual
            cart: state.cart.map(
              (
                item //tomo el carrito y busco en cart[]
              ) =>
                item.id === newCartItem.id // busco si el item a agregar esta dentro del carrito (comparo por el id)
                  ? { ...item, cantidad: item.cantidad + 1 } // si esta a la variable cantidad le sumo uno
                  : item //sino esta devuelvo el item tal cual esta
            ),
          }
        : {
            //si el item a agregar no esta en el carrito lo agrego al carrito con cantidad uno
            ...state,
            cart: [...state.cart, { ...newCartItem, cantidad: 1 }],
          };
    }
    case TYPES.REMOVE_ITEM: {
      const newCartItem = state.products.find(
        (product) => product.id === action.payload
      );
      //busco si el producto esta en el carrito si no esta da null
      const itemCart = state.cart.find((item) => item.id === action.payload);           

      return itemCart.cantidad > 1
        ? {
            ...state, //tomo el estado actual
            cart: state.cart.map(
              (
                item //tomo el carrito y busco en cart[]
              ) =>
                item.id === newCartItem.id // busco si el item a agregar esta dentro del carrito (comparo por el id)
                  ? { ...item, cantidad: item.cantidad - 1 } // si esta a la variable cantidad le resto uno
                  : item //sino esta devuelvo el item tal cual esta
            ),
          }
        : {
            ...state,
            // con la funcion filter saco del carrito el item sea igual al id que busque
            cart: state.cart.filter((item) => item.id !== newCartItem.id),
          };
    }
    case TYPES.REMOVE_ALL_ITEMS: {
      return {
        ...state,
        // con la funcion filter saco del carrito el item sea igual al id que busque
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_TO_CART: {
      return cartInitialState;
    }
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: action.payload[0],
        cart: action.payload[1]
      }
    }
    default: {
      return state;
    }
  }
};
