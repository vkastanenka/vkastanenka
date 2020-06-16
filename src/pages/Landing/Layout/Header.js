// React
import React, { Component } from "react";
import ScrollLink from "../../../components/HigherOrder/ScrollLink";

// Components
import Icon from "../../../components/Icon/Icon";
import ShootingStars from "../../../components/ShootingStars/ShootingStars";

class Header extends Component {
  state = {
    viewingMobile: false,
  };

  render() {
    return (
      <header className="header" id="home">
        <ShootingStars />
        <div className="header__content fc-grey-light-1">
          <nav className="header__nav ma-bt--md">
            <ul className="header__nav-list header__nav-list--left">
              <li className="header__nav-list-item fw-medium text-larger">
                <ScrollLink section="about">About</ScrollLink>
              </li>
              <li className="header__nav-list-item fw-medium text-larger">
                <ScrollLink section="portfolio">Portfolio</ScrollLink>
              </li>
              <li className="header__nav-list-item fw-medium text-larger">
                <ScrollLink section="skills">Skills</ScrollLink>
              </li>
            </ul>
            <div className="header__nav-logo-container">
              <img
                src={require("../../../assets/img/pyramid-logo--white.png")}
                alt="Logo"
                className="header__nav-logo"
              />
            </div>
            <ul className="header__nav-list header__nav-list--right">
              <li className="header__nav-list-item fw-medium text-larger">
                <ScrollLink section="testimonials">Testimonials</ScrollLink>
              </li>
              <li className="header__nav-list-item fw-medium text-larger">
                <ScrollLink section="contact">Contact</ScrollLink>
              </li>
              <li className="header__nav-list-item fw-medium text-larger">
                <ScrollLink section="resume">Resume</ScrollLink>
              </li>
            </ul>
          </nav>
          <div className="header__links">
            <div className="header__links--left">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.linkedin.com/"}
              >
                <Icon
                  type="linkedin"
                  className="icon icon--large icon--active icon--translate icon--white"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/vkastanenka"}
              >
                <Icon
                  type="github"
                  className="icon icon--large icon--active icon--translate icon--white"
                />
              </a>
            </div>
            <div className="header__links--right">
              <div className="header__links--mail">
                <ScrollLink section="contact">
                  <Icon
                    type="mail"
                    className="icon icon--large icon--active icon--translate icon--white"
                  />
                </ScrollLink>
              </div>
            </div>
          </div>
          <div className="header__title">
            <h1 className="heading-primary header__heading">
              Victoria Kastanenka
            </h1>
            <p className="text-large">
              I'm a <span className="fw-medium">full stack web developer</span>{" "}
              who is always eager to learn and create as best they can.
            </p>
            <p className="text-large">
              Let's <span className="fw-medium">scroll down</span> to see what I
              can offer you.
            </p>
          </div>
          <ScrollLink section="portfolio">
            <button className="btn btn--icon btn--large btn--ghost btn--hover-secondary">
              <span>Explore my work</span>
              <Icon
                type="chevron-with-circle-right"
                className="icon icon--white icon--larger"
              />
            </button>
          </ScrollLink>
        </div>
      </header>
    );
  }
}

export default Header;
