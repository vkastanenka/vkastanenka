// React
import React from "react";

// Components
import Icon from "../Icon/Icon";

const Perks = () => {
  return (
    <div className="perks">
      <div className="perks--top">
        <div className="perks__perk">
          <div className="perks__perk-icon">
            <Icon
              type="user"
              className="icon icon--massive icon--primary-dark"
            />
          </div>
          <p className="text-larger fw-medium">Client Experience</p>
          <p className="text-large pd-x--lg">
            Strong interaction for maximum satisfaction
          </p>
        </div>
        <div className="perks__perk">
          <div className="perks__perk-icon">
            <Icon
              type="laptop"
              className="icon icon--massive icon--primary-dark"
            />
          </div>
          <p className="text-larger fw-medium">Launched Websites</p>
          <p className="text-large pd-x--lg">
            Individually made from start to finish
          </p>
        </div>
      </div>
      <div className="perks--bottom">
        <div className="perks__perk">
          <div className="perks__perk-icon">
            <Icon
              type="graduation-cap"
              className="icon icon--massive icon--primary-dark"
            />
          </div>
          <p className="text-larger fw-medium">Quick Learner</p>
          <p className="text-large pd-x--lg">
            Self taught in full stack development
          </p>
        </div>
        <div className="perks__perk">
          <div className="perks__perk-icon">
            <Icon
              type="network"
              className="icon icon--massive icon--primary-dark"
            />
          </div>
          <p className="text-larger fw-medium">Adept</p>
          <p className="text-large pd-x--lg">
            Adaptable to new tech for each project's needs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Perks;
