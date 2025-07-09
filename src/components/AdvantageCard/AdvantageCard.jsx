import "./advantageCard.scss";

function AdvantageCard({ icon, text }) {
  return (
    <div className="advantageCard">
      <i className={icon}></i>
      <p>{text}</p>
    </div>
  );
}

export default AdvantageCard;
