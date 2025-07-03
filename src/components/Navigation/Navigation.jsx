import { NavLink } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  window.addEventListener("scroll", () => {
    const navigationWrapper = document.querySelector(".navigationWrapper");
    const navDroit = document.querySelector(".liens-rapide")
    console.log(navigationWrapper);
    
    if (window.scrollY > 200) {
      navigationWrapper.classList.add("scroll");
      navDroit.style.display= "none"
    } else {
      navigationWrapper.classList.remove("scroll");
      navDroit.style.display= "flex"
    }
  });

  return (
    <div className="navigationContainer">
      <div className="navigationWrapper">
        <NavLink to="/">
          <img src="./assets/logo.svg" alt="logo" className="logo" />
        </NavLink>
        <ul className="liens">
          <li>Devenir locataire</li>
          <li>Devenir propriétaire</li>
          <li>Je suis locataire</li>
          <i className="fas fa-search"></i>
        </ul>
        <div className="nav-droit">
          <ul className="liens-rapide">
            <li>Nous connaître</li>
            <li>Nous rejoindre</li>
            <li>Marchés publics</li>
          </ul>
          {/* <div className="mon-espace">
            <i className="far fa-user"></i>
            <h3>Mon agence en ligne</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
