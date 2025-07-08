import "./ActuCard.scss";

function ActuCard({ src, title, text, date }) {
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
      <div className="content">
        <h3 className="actuTitle">{title}</h3>
        <p className="date">{date}</p>
        <p className="actuText">{text}</p>
      </div>
    </div>
  );
}

export default ActuCard;
