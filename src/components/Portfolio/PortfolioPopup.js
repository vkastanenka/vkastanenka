// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import Icon from "../Icon/Icon";
import Popup from "../HigherOrder/Popup";

class PortfolioPopup extends Component {
  state = {
    currentFeature: 0,
  };

  render() {
    const { features } = this.props;
    const { currentFeature } = this.state;

    return (
      <Popup>
        <div className="portfolio-popup fc-grey-dark-3">
          <div className="portfolio-popup__showcase">
            <div className="portfolio-popup__gallery">
              {/* eslint-disable-next-line */}
              <img
                src={features[currentFeature].featurePhoto}
                alt="Gallery Image"
                className="portfolio-popup__image"
              />
              <Icon
                type="chevron-with-circle-left"
                className="icon icon--x-larger icon--white icon--active portfolio-popup__icon-gallery-backward"
                onClick={() => {
                  if (currentFeature === 0) {
                    this.setState({ currentFeature: features.length - 1 });
                  } else {
                    this.setState((prevState) => ({
                      currentFeature: prevState.currentFeature - 1,
                    }));
                  }
                }}
              />
              <Icon
                type="chevron-with-circle-right"
                className="icon icon--x-larger icon--white icon--active portfolio-popup__icon-gallery-forward"
                onClick={() => {
                  if (currentFeature === features.length - 1) {
                    this.setState({ currentFeature: 0 });
                  } else {
                    this.setState((prevState) => ({
                      currentFeature: prevState.currentFeature + 1,
                    }));
                  }
                }}
              />
              <div className="portfolio-popup__feature">
                <p className="text-large fw-medium">
                  {features[currentFeature].featureName}
                </p>
                <p>{features[currentFeature].featureSummary}</p>
              </div>
            </div>
          </div>
          <div className="portfolio-popup__description">
            <div className="portfolio-popup__project">
              <Icon
                type="cross"
                className="icon icon--larger icon--black-primary-dark icon--active portfolio-popup__icon-close"
                onClick={this.props.closePopup}
              />
              <h3 className="heading-tertiary text-shadow">
                {this.props.name}
              </h3>
              <p className="text-large fw-medium">{this.props.description}</p>
            </div>
            <p className="ma-bt--md">{this.props.summary}</p>
            <div className="portfolio-popup__links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.projectLink}
              >
                <button className="btn btn--icon btn--small btn--ghost-border btn--shadow">
                  <span>View Site</span>
                  <Icon
                    type="network"
                    className="icon icon--large icon--primary-dark"
                  />
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.repositoryLink}
              >
                <button className="btn btn--icon btn--small btn--ghost-border btn--shadow">
                  <span>View Repository</span>
                  <Icon
                    type="github"
                    className="icon icon--large icon--primary-dark"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </Popup>
    );
  }
}

PortfolioPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
  features: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  repositoryLink: PropTypes.string.isRequired,
};

export default PortfolioPopup;
