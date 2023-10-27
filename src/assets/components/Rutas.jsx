import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../page/Main";
<<<<<<< HEAD
import Header from "../page/Header";
import Footer from "../page/Footer";
import Login from "../components/Login";
import Singin from "../components/Singin";
<<<<<<< HEAD
=======
import Catalogo from "../page/Catalogo";
import Cart from "../page/Cart";
>>>>>>> home
import Destacados from "../page/Destacados";
=======
import ResetPassword from "../components/Reset-password";
import Catalogo from "../page/Catalogo";
import Cart from "../page/Cart";
import Contacto from "../components/Contacto";
import QuienesSomos from "./Quienes-Somos";

//import Contacto from "../Page/Contacto";
>>>>>>> header

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
<<<<<<< HEAD
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/Destacados" element={<Destacados />} />
<<<<<<< HEAD
        <Route path="/Cart" element={<Cart />} />
=======
        {/*<Route path="/Contacto" element={<Contacto />} />*/}
>>>>>>> header
        <Route path="/login" element={<Login />} />
        <Route path="/singin" element={<Singin />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
=======
        <Route path="/Cart" element={<Cart />} />        
>>>>>>> home
      </Routes>
    </Router>
  );
};

export default Rutas;
