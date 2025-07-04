import { BiPlus, BiUserCircle } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";
import "./OnlineAgency.scss";

function OnlineAgency() {
  return (
    <div className="onlineAgencyContainer">
      <div className="onlineAgencyWrapper">
        <div className="text">
          <h2>Votre agence en ligne</h2>
          <div className="contents">
            <div className="leftContent">
              <p>Un nouveau service pour les locataires d'Habitat 25</p>
              <p>
                Données sécurisées
                <br />
                Démarches simplifiées
              </p>
              <div className="link exploreLink">
                <p>
                  <BiPlus />
                  Je découvre Mon agence en ligne
                </p>
              </div>
              <div className="link loginLink">
                <p>
                  <BiUserCircle />
                  Je me connecte
                  <LuExternalLink />
                </p>
              </div>
            </div>
            <div className="rightContent">
              <ul>
                <li>
                  <BsArrowRightShort />
                  <p>24/24 et7/7</p>
                </li>
                <li>
                  <BsArrowRightShort />
                  <p>Avis d'échéance dématérialisé</p>
                </li>
                <li>
                  <BsArrowRightShort />
                  <p>Suivez vos demandes</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="imgWrapper">
          <img src="../assets/onlineAgency.webp" alt="agence en ligne" />
        </div>
      </div>
    </div>
  );
}

export default OnlineAgency;
