// React
import React from "react";

// Components
import Icon from "../../../components/Icon/Icon";

const About = () => {
  return (
    <section className="section about fc-grey-dark-3">
      <h2 className="heading-secondary fc-primary-dark ma-bt--md text-shadow">About Me</h2>
      <div className="about__introduction">
        <h3 className="heading-tertiary">
          Allow me to formally introduce myself. I'm Victoria
        </h3>
        <p className="text-large">
          Since beginning my coding journey one year ago, I have dedicated
          myself to the process of web development, becoming acquainted with
          both the front and back ends of the process. My diligence has allowed
          me to gain real world experience working with clients to bring their
          ideas to life. No matter the task, I always persevere to bring 100% to
          both myself, and those that I work with.{" "}
        </p>
      </div>
      <div className="about__perks">
        <div className="about__perk">
          <div className="about__perk-icon">
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
        <div className="about__perk">
          <div className="about__perk-icon">
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
        <div className="about__perk">
          <div className="about__perk-icon">
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
        <div className="about__perk">
          <div className="about__perk-icon">
            <Icon
              type="network"
              className="icon icon--massive icon--primary-dark"
            />
          </div>
          <p className="text-larger fw-medium">Adept</p>
          <p className="text-large pd-x--lg">
            Adapt to new tech for each project's needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;