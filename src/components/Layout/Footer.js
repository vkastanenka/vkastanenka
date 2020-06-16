// React
import React from "react";

// Components
import Icon from "../Icon/Icon";
import ScrollLink from "../HigherOrder/ScrollLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content fc-grey-light-1">
        <div className="footer__info">
          <p className='text-larger fw-medium'>Victoria Kastanenka</p>
          <p className='text-larger fw-medium'>&copy; {new Date().getFullYear()}</p>
        </div>
        <div className="footer__info">
          <p className='text-large'>vkastanenka@gmail.com</p>
          <p className='text-large'>(519) 215-1033</p>
        </div>
        <div className="footer__logo-container ma-bt--lg">
          <img
            src={require("../../assets/img/pyramid-logo--white.png")}
            alt="Logo"
            className="footer__logo"
          />
        </div>
        <div className="footer__links">
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
      </div>
    </footer>
  );
};

export default Footer;
