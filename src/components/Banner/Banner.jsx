import React from "react";
// import background from "../../assets/banner-background.png";
import "./banner.scss";

function Banner(props) {
  return (
    <div className="banner">
      <img src="./assets/banner-background.png" alt="banner background" />
      <div className="text">
      <p><div className="line"></div>Vous cherchez</p><span>un logement ?</span>

      </div>
    </div>
  );
}
export default Banner;
