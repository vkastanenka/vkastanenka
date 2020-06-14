// React
import React from "react";
import PropTypes from "prop-types";

// Components
import Icon from "../Icon/Icon";

const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <div className="testimonial__image-container">
        <img
          src={props.image}
          alt="Testimonial Person"
          className="testimonial__image"
        />
      </div>
      <h3 className="text-larger fw-medium text-shadow ma-bt--lg">
        {props.testimonial}
      </h3>
      <div className="testimonial__identity">
        <p className="text-larger fw-medium ma-bt--sm">{props.name}</p>
        <a
          className="btn btn--small btn--primary"
          target="_blank"
          rel="noopener noreferrer"
          href={props.websiteLink}
        >
          <span className="text-large fw-medium">{props.company}</span>
          <Icon
            type="link"
            className="icon icon--large icon--primary-dark icon--active"
          />
        </a>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  websiteLink: PropTypes.string.isRequired,
};

export default Testimonial;
