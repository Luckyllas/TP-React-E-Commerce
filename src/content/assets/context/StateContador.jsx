import { useState } from "react";
import { ContadorContext } from "./ContadorContext";

const StateContador = ({ children }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador((prevState) => prevState + 1);
  };

  const decrementar = () => {
    setContador((prevState) => prevState - 1);
  };

  return (
    <ContadorContext.Provider value={{ contador, incrementar, decrementar }}>
      {children}
    </ContadorContext.Provider>
  );
};

export default StateContador;
