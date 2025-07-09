import { useEffect, useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import ActuCard from "../../components/ActuCards/ActuCard";
import news from "../../data/actus.json";
import "./News.scss";

function News() {
  const firstSix = news.slice(0, 6);
  const [pageNumber, setPageNumber] = useState(1);
const [newArray, setNewArray] = useState([])
  const n = Math.ceil(news.length / 6);
  const totalPages = Array.from({ length: n }, (_, i) => i + 1);

  const [resultsPerPage, setResultsPerPage] = useState();
  useEffect(() => {
    const newsCardsWrapper = document.querySelector(".newsCardsWrapper");
    setResultsPerPage(newsCardsWrapper.childElementCount);
  }, []);

  useEffect(() => {
    const newArray = news.slice(pageNumber * 6 - 6, pageNumber * 6);
    setNewArray(newArray);
  }, [pageNumber]);

  function onClickPage(e) {
    const pages = document.querySelectorAll(".pagination li");
    pages.forEach((page) => {
      if (page.classList.contains("active")) {
        page.classList.remove("active");
      }
    });
    e.target.classList.add("active");

    pages.forEach((page) => {
      if (page.classList.contains("active")) setPageNumber(page.textContent);
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
        <button
          className="actuSearch"
          onClick={() =>
            document
              .querySelector(".newsSearchWrapper")
              .classList.toggle("visible")
          }
        >
          Rechercher une actualité
        </button>
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
            <button>
              {window.innerWidth > 768 ? (
                <TfiReload />
              ) : (
                <>
                  {" "}
                  <TfiReload />
                  <p>Réinitialiser les filtres</p>
                </>
              )}
            </button>
            <div className="searchBtnWrapper">
              <button>
                {window.innerWidth > 768 ? (
                  <CiSearch />
                ) : (
                  <>
                    {" "}
                    <CiSearch />
                    <p>Rechercher</p>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="newsCardsWrapper">
          {newArray.map((item, index) => (
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
          <div className="totalResults">
            {newArray.length} résultats sur {news.length}
          </div>
          <ul className="pagination">
            {totalPages.map((item, index) => (
              <li key={index} onClick={onClickPage}>
                {index + 1}
              </li>
            ))}
          </ul>
          <div className="totalPages">
            Page {pageNumber} sur {n}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
