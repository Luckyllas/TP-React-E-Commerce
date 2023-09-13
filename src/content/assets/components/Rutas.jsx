import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../page/Main";
import Header from "../page/Header";
import Footer from "../page/Footer";
//import Contacto from "../Page/Contacto";


const Rutas = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/*<Route path="/Contacto" element={<Contacto />} />*/}
      </Routes>
      <Footer />
    </Router>
  );
};

export default Rutas;