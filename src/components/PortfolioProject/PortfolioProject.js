// React
import React from "react";
import PropTypes from "prop-types";

const PortfolioProject = (props) => {
  return (
    <div className="portfolio-project">
      <div className="portfolio-project__info">
        <div className="portfolio-project__info--name-build">
          <p className="text-larger fw-medium">{props.name}</p>
          <p className="text-large">{props.build}</p>
        </div>
        <div className="portfolio-project__info--popup-cta">
          <button className="btn" onClick={props.setPopup}>
            Learn More
          </button>
        </div>
      </div>
      <img
        src={props.image}
        alt="Project Cover"
        className="portfolio-project__image"
      />
    </div>
  );
};

PortfolioProject.propTypes = {
  name: PropTypes.string.isRequired,
  build: PropTypes.string.isRequired,
  setPopup: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default PortfolioProject;
