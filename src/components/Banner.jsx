import React from "react";
import "../assets/css/Banner.css"; 

const Banner = () => {
  return (
    <div className="banner">
      <img src={require(`../assets/image/banner.PNG`)} alt="banner de envios" />
    </div>
  );
};

export default Banner;
