import React from "react";
import "../css/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img src={require(`../image/banner.PNG`)} alt="banner de envios" />
    </div>
  );
};

export default Banner;
