// React
import React from "react";

// Components
import ScrollLink from "../HigherOrder/ScrollLink";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item fw-medium">
          <ScrollLink section="home">Home</ScrollLink>
        </li>
        <li className="nav__list-item fw-medium">
          <ScrollLink section="about">About</ScrollLink>
        </li>
        <li className="nav__list-item fw-medium">
          <ScrollLink section="portfolio">Portfolio</ScrollLink>
        </li>
        <li className="nav__list-item fw-medium">
          <ScrollLink section="skills">Skills</ScrollLink>
        </li>
        <li className="nav__list-item fw-medium">
          <ScrollLink section="testimonials">Testimonials</ScrollLink>
        </li>
        <li className="nav__list-item fw-medium">
          <ScrollLink section="contact">Contact</ScrollLink>
        </li>
        <li className="nav__list-item fw-medium">
          <ScrollLink section="resume">Resume</ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
