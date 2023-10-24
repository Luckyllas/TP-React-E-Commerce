import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../page/Main";
import Header from "../page/Header";
import Footer from "../page/Footer";
import Login from "../components/Login";
import Singin from "../components/Singin";
import ResetPassword from "../components/Reset-password";
import Catalogo from "../page/Catalogo";
import Cart from "../page/Cart";
import Contacto from "../components/Contacto";
import QuienesSomos from "./Quienes-Somos";

//import Contacto from "../Page/Contacto";

const Rutas = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/*<Route path="/Contacto" element={<Contacto />} />*/}
        <Route path="/login" element={<Login />} />
        <Route path="/singin" element={<Singin />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Rutas;