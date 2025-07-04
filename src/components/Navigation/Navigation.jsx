import { CgChevronRight } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

function Navigation() {
  window.addEventListener("scroll", () => {
    const navigationWrapper = document.querySelector(".navigationWrapper");
    const navDroit = document.querySelector(".liens-rapide");

    if (window.scrollY > 200) {
      navigationWrapper.classList.add("scroll");
      navDroit.style.display = "none";
    } else {
      navigationWrapper.classList.remove("scroll");
      navDroit.style.display = "flex";
    }
  });

  function underMenuOpen(e) {
    e.stopPropagation();
    const underMenus = document.querySelectorAll(".underMenu");

    underMenus.forEach((underMenu) => {
      underMenu.classList.remove("underMenuOpen");
    });
    if (e.currentTarget.firstElementChild.classList.contains("underMenuOpen")) {
      e.currentTarget.firstElementChild.classList.remove("underMenuOpen");
      return;
    }
    e.currentTarget.firstElementChild.classList.add("underMenuOpen");
  }

  function burgerMenu(e){
    const links = document.querySelector(".links")
    links.classList.toggle("visible")
  }

  return (
    <div className="navigationContainer" >
      <div className="navigationWrapper">
        <RxHamburgerMenu className="burgerMenu" onClick={burgerMenu}/>
        <NavLink to="/">
          <img src="./assets/logo.svg" alt="logo" className="logo" />
        </NavLink>
        <ul className="links">
          <li className="link" onClick={underMenuOpen}>
            Devenir locataire
            <ul className="underMenu ">
              <button className="close" onClick={underMenuOpen}>
                Fermer
                <IoMdCloseCircleOutline />
              </button>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Ma demande de logement</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Mes aides financières</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Je cherche un logement</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="link" onClick={underMenuOpen}>
            Devenir propriétaire{" "}
            <ul className="underMenu">
              <button className="close" onClick={underMenuOpen}>
                Fermer
                <IoMdCloseCircleOutline />
              </button>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Acheter : mode d'emploi</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Achat sécurisé</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Je cherche un logement</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="link" onClick={underMenuOpen}>
            Je suis locataire{" "}
            <ul className="underMenu underMenu3">
              <button className="close" onClick={underMenuOpen}>
                Fermer
                <IoMdCloseCircleOutline />
              </button>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Mon emménagement</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Réparations et dépannages</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Je souhaite devenir propriétaire</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Agence en ligne : mode d'emploi</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Mes démarches</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Mes documents</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Je paye mon loyer</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <CgChevronRight />
                  <span>Mes charges locatives</span>
                </a>
              </li>
            </ul>
          </li>
          <i className="fas fa-search"></i>
        </ul>
        <div className="navRight">
          <ul className="quickLinks">
            <li>Nous connaître</li>
            <li>Nous rejoindre</li>
            <li>Marchés publics</li>
          </ul>
          <div className="mySpace">
            <i className="far fa-user"></i>
            <h3>Mon agence en ligne</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
