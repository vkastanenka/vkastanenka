// React
import React from "react";

// Components
import Icon from "../Icon/Icon";
import ScrollLink from "../HigherOrder/ScrollLink";

// Assets
import resume from "../../assets/img/Victoria_Kastanenka_Resume.pdf";

const NavBar = () => {
  return (
    <nav className="nav fc-grey-light-1">
      <ul className="nav__list section">
        <li className="nav__list-item">
          <ScrollLink section="home">Home</ScrollLink>
        </li>
        <li className="nav__list-item">
          <ScrollLink section="about">About</ScrollLink>
        </li>
        <li className="nav__list-item">
          <ScrollLink section="portfolio">Portfolio</ScrollLink>
        </li>
        <li className="nav__list-item">
          <ScrollLink section="skills">Skills</ScrollLink>
        </li>
        <li className="nav__list-item">
          <ScrollLink section="testimonials">Testimonials</ScrollLink>
        </li>
        <li className="nav__list-item">
          <ScrollLink section="contact">Contact</ScrollLink>
        </li>
        <li className="nav__list-item nav__list-item--icon">
          <a href={resume} rel="noopener noreferrer" target="_blank">
            Resume
          </a>
          <Icon type="download" className="icon icon--white icon--large" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
