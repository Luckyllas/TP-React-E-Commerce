import React from "react";
import "../css/Footer.css";
import NoticiasRedesContacto from "../components/noticiasRedesContacto";
import Menu from "../components/menu";

const Footer = () => {
  return (
    <footer className="footer bg-secondary-subtle text-emphasis-secondary ">
      <div>
        <section >
        <NoticiasRedesContacto />
        </section>
        <section >
          <Menu />
        </section>
      </div>
      <div>
        <section id="dataFiscal">
          <img src="https://www.afip.gob.ar/images/f960/DATAWEB.jpg" />
        </section>
        <section id="copyright">copyright</section>
      </div>
    </footer>
  );
};

export default Footer;
