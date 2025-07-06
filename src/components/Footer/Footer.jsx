import { BsLinkedin, BsYoutube } from "react-icons/bs";
import "./footer.scss";
import { Link } from "react-router-dom";

function Footer(props) {
  function more(e) {
    const paragraphe = document.querySelector(".paragraphe");
    paragraphe.classList.add("visible");
    e.target.style.display = "none";
  }

  return (
    <div className="footerContainer">
      <div className="footerWrapper">
        <div className="footerTop">
          <img src="./assets/logo.svg" alt="logo" className="logo" />
          <div className="footerTopCenter">
            <p className="paragraphe">
              Depuis un siècle, Habitat 25 s'appuie sur son ancrage local et son
              savoir-faire pour répondre avec exigence aux préoccupations des
              habitants et accompagner les évolutions de leur quotidien. Chaque
              jour, les habitants du Doubs peuvent compter sur les femmes et les
              hommes d'Habitat 25 pour trouver des appartements ou maisons en
              fonction des critères de chacun. Plus de 10 000 logements sur 106
              communes du DOUBS, 1200 nouveaux locataires chaque année.
              <br />
              <br /> <span>Nos agences</span> : Besançon | Montbéliard |
              Pontarlier
            </p>
            <p className="more" onClick={more}>
              Lire plus
            </p>
          </div>
          <div className="footerTopRight">
            <h4>Consultez également</h4>
            <ul>
              <li>
                <Link to="/actualités">Les actualités</Link>
              </li>
              <li>
                <Link to="/offres-d'emploi">Nos offres d'emploi</Link>
              </li>
              <li>Marchés publics</li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <div className="footerBottomLeft">
            <ul>
              <li>
                <a href="a">Mentions légales</a>
              </li>
              <li>
                <a href="a">Plan du site</a>
              </li>
              <li>
                Réalisation :{" "}
                <a href="https://www.eolas.fr" rel="noreferrer" target="_blank">
                  <img src="./assets/logoEolas.png" alt="logo eolas" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footerBottomRight">
            <ul className="socialNetworks">
              <li>
                <a
                  href="https://www.youtube.com/channel/UCLK1bIKOLC0cKoYp1NegpXA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://fr.linkedin.com/company/habitat25"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
