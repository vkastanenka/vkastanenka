// React
import React from "react";
import PropTypes from "prop-types";

// Components
import ScrollLink from "../HigherOrder/ScrollLink";

const NavLarge = (props) => {
  return (
    <nav
      className={
        !props.className ? "nav-large" : `nav-large ${props.className}`
      }
    >
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
          src={require("../../assets/img/pyramid-logo--white.png")}
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
          <ScrollLink section="resume">Resume</ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

NavLarge.propTypes = {
  className: PropTypes.string,
};

export default NavLarge;
