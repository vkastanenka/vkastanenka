// React
import React from "react";

// Components
import ScrollLink from "../HigherOrder/ScrollLink";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
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
        <li className="nav__list-item">
          <ScrollLink section="resume">Resume</ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
