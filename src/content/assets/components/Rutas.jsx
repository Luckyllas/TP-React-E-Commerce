import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../page/Main";
import Header from "../page/Header";
import Footer from "../page/Footer";
import MainCatalogo from "../page/MainCatalogo";
import TituloCatalogo from "./TituloCatalogo";
import StateContador from "../context/StateContador";


const Rutas = () => {
  return (
    <Router>
      <StateContador>
      <Header />      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Catalogo" element={<MainCatalogo />} />       
      </Routes>
      <Footer />
      </StateContador>
    </Router>
  );
};

export default Rutas;
