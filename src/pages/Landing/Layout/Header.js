// React
import React from "react";

// Components
import ShootingStars from "../../../components/ShootingStars/ShootingStars";

const Header = () => {
  return (
    <header className="header">
      <ShootingStars />
      <div className="header__content">
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
        <button className="btn btn--ghost text-large">Explore my work</button>
      </div>
    </header>
  );
};

export default Header;
