import "./ActuCard.scss";

function ActuCard({ src, title, text }) {
  function hover(e) {
    const blueFilter = document.querySelector(".blueFilter");
    blueFilter.classList.toggle("visible");
  }

  return (
    <div className="actuCardContainer" onMouseOver={hover} onMouseOut={hover}>
      <div className="imgWrapper"><img src={src} alt={title} /></div>
      {/* <div className="blueFilter">
          <FaArrowRightLong />
        </div> */}
      <h3 className="actuTitle">{title}</h3>
      <p className="actuText">{text}</p>
    </div>
  );
}

export default ActuCard;
