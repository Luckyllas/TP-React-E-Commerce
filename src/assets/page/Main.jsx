import React from "react";
import "../css/Main.css";
import Carrucel from "../components/Carrucel";
import Banner from "../components/Banner";
import Destacados from "../page/Destacados";

const Main = () => {
  return (
    <main >
      <Carrucel />
      <Banner />
      <Destacados />
    </main>
  );
};

export default Main;
