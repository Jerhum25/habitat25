import { CgChevronRight } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import ActuCard from "../../components/ActuCards/ActuCard";
import news from "../../data/actus.json";
import "./News.scss";
import { useEffect, useState } from "react";

function News() {
  const [pageNumber, setPageNumber] = useState(1)
  function onClickPage(e) {
    const pages = document.querySelectorAll(".pagination li");
    pages.forEach((page) => {
      if (page.classList.contains("active")) {
        page.classList.remove("active");
      }
    });
    e.target.classList.add("active");
    
      
        pages.forEach(page => {
          if(page.classList.contains("active"))
          setPageNumber(page.textContent)
          
        });
  }



  return (
    <div className="newsContainer">
      <div className="newsWrapper">
        <ul className="ariane">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <CgChevronRight />
          <li>Les actualités</li>
        </ul>
        <h2>
          <div className="line"></div>Les actualités
        </h2>
        <button className="actuSearch" onClick={()=> document.querySelector(".newsSearchWrapper").classList.toggle("visible")}>Rechercher une actualité</button>
        <div className="newsSearchWrapper">
          <div className="newsSearch">
            <input type="text" placeholder="Vous recherchez" />
            <select type="text" placeholder="Toutes les thématiques">
              <option value="Toutes les thématiques">
                Toutes les thématiques
              </option>
              <option value="Bailleur engagé">Bailleur engagé</option>
              <option value="Constructions, réhabilitations, travaux">
                Constructions, réhabilitations, travaux
              </option>
              <option value="Informations et services">
                Informations et services
              </option>
              <option value="Satisfaction locataires">
                Satisfaction locataires
              </option>
            </select>
            <button>{window.innerWidth > 768 ? <TfiReload /> : (<> <TfiReload /><p>Réinitialiser les filtres</p></>)}</button>
            <div className="searchBtnWrapper">
              <button>{window.innerWidth > 768 ? <CiSearch /> : (<> <CiSearch /><p>Rechercher</p></>)}
              </button>
            </div>
          </div>
        </div>
        <div className="newsCardsWrapper">
          {news.map((item, index) => (
            <ActuCard
              src={item.src}
              title={item.title}
              date={item.date}
              text={item.text}
              key={index}
            />
          ))}
        </div>
        <div className="results">
          <div className="totalResults">9 résultats sur {news.length}</div>
          <ul className="pagination">
            <li className="active" onClick={onClickPage}>
              1
            </li>
            <li onClick={onClickPage}>2</li>
            <li onClick={onClickPage}>3</li>
            <li onClick={onClickPage}>4</li>
            <li onClick={onClickPage}>5</li>
            <li onClick={onClickPage}>6</li>
          </ul>
          <div className="totalPages">Page {pageNumber} sur 13</div>
        </div>
      </div>
    </div>
  );
}

export default News;
