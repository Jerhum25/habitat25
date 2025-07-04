import { useState } from "react";
import "./housingSearch.scss";

function HousingSearch(props) {
  function btnIsActive(e) {
    const btns = document.querySelectorAll(".rentBuyBtns div");

    btns.forEach((btn) => {
      btn.classList.remove("active");
      btn.classList.remove("visible");
    });
    // e.stopPropagation();
    e.target.classList.add("active");
    e.target.lastChild.classList.add("visible");
  }

  const [innerWidth, setInnerWidth] = useState(1170);
  window.addEventListener("resize", () => setInnerWidth(window.innerWidth));

  return (
    <div className="housingSearchContainer">
      <form action="">
        <div className="rentBuyBtns">
          <div className="rent active" onClick={btnIsActive}>
            <p>Louer</p> <div className="triangle visible"></div>
          </div>
          <div className="buy" onClick={btnIsActive}>
            <p>Acheter</p>
            <div className="triangle"></div>
          </div>
        </div>

        <label htmlFor="location" className="location">
          <p>Localités</p>
          <div className="inputLocation">
            <input type="text" />
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </label>
        <label htmlFor="type">
          <p>Type de bien</p>
          <select name="type" className="type">
            <option selected>Type de bien</option>
            <option value="appartement">Appartement</option>
            <option value="maison">Maison</option>
            <option value="local commercial">Local commercial</option>
            <option value="garage">Garage</option>
            <option value="autre">Autre</option>
          </select>
        </label>
        <label htmlFor="numberOfPieces">
          <p>Nombre de pièces</p>
          <select name="pieces">
            <option selected>Sélectionner</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5 et +">5 et +</option>
          </select>
        </label>
        <label htmlFor="budget" className="budget">
          <p>Budget maximum</p>
          <div className="inputIcon">
            <input type="number" min={0}/><i class="fas fa-euro-sign"></i>
          </div>
        </label>
        <button type="submit">
                      {innerWidth >= 992 ? (
              <i className="fas fa-search"></i>
            ) : (
              <><i className="fas fa-search"></i><p>Rechercher</p></>
            )}

          
        </button>
      </form>
    </div>
  );
}

export default HousingSearch;
