// React
import React from "react";
import withSizes from "react-sizes";
import PropTypes from "prop-types";

// Components
import Auxiliary from "../HigherOrder/Auxiliary";
import ScrollLink from "../HigherOrder/ScrollLink";

// Assets
import resume from "../../assets/img/Victoria_Kastanenka_Resume.pdf";

const NavLarge = (props) => {
  const { isMedium } = props;

  return (
    <nav
      className={
        !props.className ? "nav-large" : `nav-large ${props.className}`
      }
    >
      {!isMedium ? (
        <Auxiliary>
          <ul className="nav-large__nav-list nav-large__nav-list--left">
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <ScrollLink section="about">About</ScrollLink>
            </li>
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <ScrollLink section="portfolio">Portfolio</ScrollLink>
            </li>
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <ScrollLink section="skills">Skills</ScrollLink>
            </li>
          </ul>
          <div className="nav-large__nav-logo-container">
            <img
              src={require("../../assets/img/logo--desktop.png")}
              srcSet={`${require("../../assets/img/logo--mobile.png")} 219w, ${require("../../assets/img/logo--desktop.png")} 255w`}
              sizes="(max-width: 25em) 219px, 255px"
              alt="Logo"
              className="nav-large__nav-logo"
            />
          </div>
          <ul className="nav-large__nav-list nav-large__nav-list--right">
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <ScrollLink section="testimonials">Testimonials</ScrollLink>
            </li>
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <ScrollLink section="contact">Contact</ScrollLink>
            </li>
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <a href={resume} rel="noopener noreferrer" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </Auxiliary>
      ) : (
        <Auxiliary>
          <ul className="nav-large__nav-list">
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <ScrollLink section="about">About</ScrollLink>
            </li>
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <ScrollLink section="portfolio">Portfolio</ScrollLink>
            </li>
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <ScrollLink section="skills">Skills</ScrollLink>
            </li>
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <ScrollLink section="testimonials">Testimonials</ScrollLink>
            </li>
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <ScrollLink section="contact">Contact</ScrollLink>
            </li>
            <li className="nav-large__nav-list-item fw-medium text-larger">
              <a href={resume} rel="noopener noreferrer" target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </Auxiliary>
      )}
    </nav>
  );
};

NavLarge.propTypes = {
  className: PropTypes.string,
  isMedium: PropTypes.bool.isRequired,
};

const mapSizesToProps = ({ width }) => ({
  isMedium: width <= 800,
});

export default withSizes(mapSizesToProps)(NavLarge);
