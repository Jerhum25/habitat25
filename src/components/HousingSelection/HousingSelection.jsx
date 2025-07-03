import { CgChevronRight } from "react-icons/cg";
import dataHousingSeletion from "../../data/housingSelection.json";
import HousingSelectionCard from "../HousingSelectionCard/HousingSelectionCard";
import "./HousingSelection.scss";

function more(e) {
//   const actusCards = document.querySelector(".actusCards");
//   actusCards.classList.toggle("more");
//   actusCards.classList.contains("more")
//     ? (e.target.textContent = "> Voir moins")
//     : (e.target.textContent = "> Voir tout");
}

function HousingSelection() {
  return (
    <div className="housingSelectionContainer">
      <div className="housingSelectionWrapper">
        <h2>Notre sélection de logements</h2>

        <h3>
          En location{" "}
          <p className="more" onClick={more}>
            <CgChevronRight />
            Voir tout
          </p>
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
