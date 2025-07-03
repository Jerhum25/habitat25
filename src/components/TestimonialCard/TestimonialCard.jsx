import { PiUserList } from "react-icons/pi";
import "./TestimonialCard.scss";

function TestimonialCard({ clientStatus, family, testimonial }) {
  return (
    <div className="testimonialCardContainer">
      <div className="testimonialCardWrapper">
        <div className="userIcon">
          <PiUserList />
        </div>
        <div className="testimonialDetails">
          <p className="clientStatus">Devenir {clientStatus}</p>
          <h4 className="family">{family}</h4>
          <p className="testimonial">{testimonial}</p>
          <div className="link">
            <p>
              Devenir{" "}
              {clientStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
