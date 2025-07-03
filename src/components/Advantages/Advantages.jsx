import dataAdvantages from "../../data/advantages.json";
import AdvantageCard from "../AdvantageCard/AdvantageCard";
import "./advantages.scss";
function Advantages(props) {
  return (
    <div className="advantagesContainer">
      <div className="advantagesCards">
        {dataAdvantages.map((item, index) => (
          <AdvantageCard key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default Advantages;
