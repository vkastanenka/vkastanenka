// React
import React from "react";
import ScrollLink from "../../../components/HigherOrder/ScrollLink";
import withSizes from "react-sizes";
import PropTypes from "prop-types";

// Components
import Icon from "../../../components/Icon/Icon";
import NavLarge from "../../../components/Layout/NavLarge";
import ShootingStars from "../../../components/ShootingStars/ShootingStars";

const Header = (props) => {
  const { isMedium } = props;
  const logo = isMedium ? (
    <div className="header__logo-container ma-bt--4">
      <img
        src={require("../../../assets/img/logo--desktop.png")}
        srcSet={`${require("../../../assets/img/logo--mobile.png")} 219w, ${require("../../../assets/img/logo--desktop.png")} 255w`}
        sizes="(max-width: 25em) 219px, 255px"
        alt="Logo"
        className="header__logo"
      />
    </div>
  ) : null;

  return (
    <header className="header" id="home">
      <ShootingStars />
      <div className="header__content fc-grey-light-1 ta-center">
        {logo}
        <NavLarge className={isMedium ? "ma-bt--3" : null} />
        <div className="header__links ma-bt--3">
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
        <div className="header__title ma-bt--4">
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
          <button className="btn btn--icon btn--large btn--ghost btn--hover-primary-dark">
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
};

Header.propTypes = {
  isMedium: PropTypes.bool.isRequired,
};

const mapSizesToProps = ({ width }) => ({
  isMedium: width <= 800,
});

export default withSizes(mapSizesToProps)(Header);
