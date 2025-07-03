import "./footer.scss";

function Footer(props) {
  function more(e) {
    const paragraphe = document.querySelector(".paragraphe");
    paragraphe.classList.add("visible");
    e.target.style.display = "none";
  }

  return (
    <div className="footer">
      <div className="footer-haut">
        <img src="./assets/logo.svg" alt="logo" className="logo" />
        <div className="footer-haut-centre">
          <p className="paragraphe">
            Depuis un siècle, Habitat 25 s'appuie sur son ancrage local et son
            savoir-faire pour répondre avec exigence aux préoccupations des
            habitants et accompagner les évolutions de leur quotidien. Chaque
            jour, les habitants du Doubs peuvent compter sur les femmes et les
            hommes d'Habitat 25 pour trouver des appartements ou maisons en
            fonction des critères de chacun. Plus de 10 000 logements sur 106
            communes du DOUBS, 1200 nouveaux locataires chaque année.
            <br />
            <br /> <span>Nos agences</span> : Besançon | Montbéliard |
            Pontarlier
          </p>
          <p className="more" onClick={more}>
            Lire plus
          </p>
        </div>
        <div className="footer-haut-droit">
          <h4>Consultez également</h4>
          <ul>
            <li>Les actualités</li>
            <li>Nos offres d'emploi</li>
            <li>Marchés publics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
