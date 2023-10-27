import React, { useReducer } from "react";

const Contador = () => {
  const initialState = {
    contador: 0,
  };

  //Funcion reductora
  const ContadorReducer = (state, action) => {
    switch (action.type) {
      case "Incrementar":
        return { contador: state.contador + 1 };
      case "Decrementar":
        return { contador: state.contador - 1 };
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

  return (
    <>
      <div>
        <h3>{state.contador}</h3>
        <button onClick={decrementarHandle}>-1</button>
        <button onClick={aumentarHandle}>+1</button>
      </div>
    </>
  );
};

export default Contador;