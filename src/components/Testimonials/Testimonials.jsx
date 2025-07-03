import dataTestimonials from "../../data/testimonials.json";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonials.scss";

function Testimonials() {
  return (
    <div className="testimonialsContainer">
      <div className="testimonialsWrapper">
        <h2>Témoignages</h2>
        <div className="testimonialsCards">
          {dataTestimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              family={item.family}
              clientStatus={item.clientStatus}
              testimonial={item.testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
