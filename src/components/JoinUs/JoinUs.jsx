import { CgChevronRight } from "react-icons/cg";
import "./JoinUs.scss";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function JoinUs() {
  return (
    <div className="joinUsContainer">
      <div className="joinUsWrapper">
          <div className="work">
            <h2>Travailler chez Habitat 25</h2>
            <p>
              Maîtrise d'ouvrage, techniques du bâtiments, gestion locative et
              immobilière, relations clients, fonctions supports : donnez du sens à
              votre travail en participant à notre mission d'intérêt général et
              notre démarche de développement durable
            </p>
            <a href="a"><CgChevronRight />Nous rejoindre</a>
            <a href="a"><CgChevronRight />Emploi et handicap</a>
          </div>
          <div className="jobOffers" id="jobOffers">
            <h2>Nous rejoindre</h2>
            <div className="card">
              <p className="offerStatus">cdi</p>
              <p className="location"><LiaMapMarkerAltSolid />BESANCON ( 5rue Loucheur)</p>
              <p className="title">
                Contrôleur de gestion / Auditeur interne (H/F)
              </p>
              <button><a href="a">Consuter l'offre</a></button>
            </div>
          <Link to="/offres-d'emploi" className="allOffers"><CgChevronRight />Toutes les offres</Link>
          </div>
      </div>
    </div>
  );
}

export default JoinUs;
