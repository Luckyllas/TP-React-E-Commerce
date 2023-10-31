import React from "react";
import "../css/Main.css";
import Carrucel from "../components/Carrucel";
import Banner from "../components/Banner";
import Destacados from "./Destacados";

const Main = () => {
  return (
    <main>
      <Carrucel />
      <Banner />
      <Destacados />
      <Banner />
    </main>
  );
};

export default Main;
