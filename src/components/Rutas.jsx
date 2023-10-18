import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<<< Updated upstream:src/content/assets/components/Rutas.jsx
import Main from "../page/Main";
import Header from "../page/Header";
import Footer from "../page/Footer";
//import Contacto from "../Page/Contacto";
========
import Main from "../assets/page/Main";
import Header from "../assets/page/Header";
import Footer from "../assets/page/Footer";
import Catalogo from "../assets/page/Catalogo";
import Cart from "../assets/page/Cart";
import Login from "../components/Login";
import Singin from "../components/Singin";
>>>>>>>> Stashed changes:src/components/Rutas.jsx

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
