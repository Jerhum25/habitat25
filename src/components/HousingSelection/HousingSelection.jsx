import { CgChevronRight } from "react-icons/cg";
import dataHousingSeletion from "../../data/housingSelection.json";
import HousingSelectionCard from "../HousingSelectionCard/HousingSelectionCard";
import "./HousingSelection.scss";
import { Link } from "react-router-dom";


function HousingSelection() {
  return (
    <div className="housingSelectionContainer">
      <div className="housingSelectionWrapper">
        <h2>Notre sélection de logements</h2>

        <h3>
          En location{" "}
          <Link to="/annonces-location" className="more">
            <CgChevronRight />
            Voir tout
          </Link>
        </h3>

        <div className="housingSelectionCards">
          {dataHousingSeletion.map((item, index) => (
            <HousingSelectionCard
              key={index}
              src={item.src}
              title={item.title}
              location={item.location}
              price={item.price}
              charges={item.charges}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HousingSelection;
