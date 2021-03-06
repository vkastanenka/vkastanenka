// React
import React from "react";
import PropTypes from "prop-types";

const PortfolioShowcase = (props) => {
  return (
    <div className={"portfolio-project fc-grey-light-1"}>
      <div className="portfolio-project__info">
        <div className="portfolio-project__info--name-build">
          <p className="text-larger fw-medium">{props.name}</p>
          <p className="text-large">{props.build}</p>
        </div>
        <div className="portfolio-project__info--popup-cta">
          <button
            className="btn btn--small btn--primary-dark btn--shadow"
            onClick={props.setPopup}
          >
            Learn More
          </button>
        </div>
      </div>
      <img
        srcSet={props.imageSrcSet}
        sizes={props.imageSrcSetSizes}
        src={props.image}
        alt="Project Cover"
        className="portfolio-project__image"
      />
    </div>
  );
};

PortfolioShowcase.propTypes = {
  name: PropTypes.string.isRequired,
  build: PropTypes.string.isRequired,
  setPopup: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  imageSrcSet: PropTypes.string.isRequired,
  imageSrcSetSizes: PropTypes.string.isRequired
};

export default PortfolioShowcase;
