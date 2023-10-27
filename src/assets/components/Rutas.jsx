import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../page/Main";
import Catalogo from "../page/Catalogo";
import Cart from "../page/Cart";
import Destacados from "../page/Destacados";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/Destacados" element={<Destacados />} />
        <Route path="/Cart" element={<Cart />} />        
      </Routes>
    </Router>
  );
};

export default Rutas;
