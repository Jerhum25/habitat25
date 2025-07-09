import "./ActuCard.scss";

function ActuCard({ src, title, text, date }) {

  return (
    <div className="actuCardContainer">
      <div className="imgWrapper"><img src={src} alt={title} /></div>
      <div className="content">
        <h3 className="actuTitle">{title}</h3>
        <p className="date">{date}</p>
        <p className="actuText">{text}</p>
      </div>
    </div>
  );
}

export default ActuCard;
