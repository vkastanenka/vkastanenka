// React
import React from "react";

// Components
import Icon from "../Icon/Icon";
import ScrollLink from "../HigherOrder/ScrollLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content section fc-grey-light-1">
        <div className="footer__info">
          <p className="text-larger fw-medium">Victoria Kastanenka</p>
          <p className="text-larger fw-medium">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
        <div className="footer__info ma-bt--3">
          <p className="text-large">vkastanenka@gmail.com</p>
          <p className="text-large">(519) 215-1033</p>
        </div>
        <div className="footer__logo-container ma-bt--3">
          <img
            src={require("../../assets/img/logo--desktop.png")}
            srcSet={`${require("../../assets/img/logo--mobile.png")} 219w, ${require("../../assets/img/logo--desktop.png")} 255w`}
            sizes="(max-width: 25em) 219px, 255px"
            alt="Logo"
            className="footer__logo"
          />
        </div>
        <div className="footer__links">
          <div className="header__links--left">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.linkedin.com/in/vkastanenka/"}
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
      </div>
    </footer>
  );
};

export default Footer;
