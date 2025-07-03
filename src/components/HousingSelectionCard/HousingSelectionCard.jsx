import { LiaMapMarkerAltSolid } from "react-icons/lia";
import "./HousingSelectionCard.scss";

function HousingSelectionCard({ src, title, type, location, price, charges }) {
  return (
    <div className="housingSelectionCardContainer">
      <div className="imgWrapper">
        <img src={src} alt={title} />
      </div>

      <p className="location"><LiaMapMarkerAltSolid />{location}</p>
      <h4 className="title">{title}</h4>
      
      <p className="price">{price}€<span>/mois</span></p>
      <p className="charges">Dont charges : {charges}€</p>
    </div>
  );
}

export default HousingSelectionCard;
