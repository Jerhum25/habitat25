import React from "react";
import "./banner.scss";

function Banner(props) {
  return (
    <div className="bannerContainer" id="topPage">
      <img src="./assets/banner-background.png" alt="banner background" />
      <div className="text">
      <p><span className="line"></span>Vous cherchez</p><span>un logement ?</span>

      </div>
    </div>
  );
}
export default Banner;
