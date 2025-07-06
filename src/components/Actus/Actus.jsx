import { CgChevronRight } from "react-icons/cg";
import dataActus from "../../data/actus.json";
import ActuCard from "../ActuCards/ActuCard";
import "./Actus.scss";
import { Link } from "react-router-dom";

function more(e) {
  const actusCards = document.querySelector(".actusCards");
  actusCards.classList.toggle("more");
  actusCards.classList.contains("more")
    ? (e.target.textContent = "> Voir moins")
    : (e.target.textContent = "> Voir tout");
}

function Actus() {
  return (
    <div className="actusContainer" id="actus">
      <div className="actusWrapper">
        <h2>
          actualités
          <Link to="/actualités" className="more" onClick={more}>
            <CgChevronRight />
            Voir tout
          </Link>
        </h2>

        <div className="actusCards">
          {dataActus.map((item, index) => (
            <ActuCard
              key={index}
              src={item.src}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Actus;
