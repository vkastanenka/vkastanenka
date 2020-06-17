// React
import React from "react";

// Components
import Icon from '../Icon/Icon';
import ScrollLink from "../HigherOrder/ScrollLink";

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
          <ScrollLink section="resume">Resume</ScrollLink>
          <Icon type='download' className='icon icon--white icon--large' />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
