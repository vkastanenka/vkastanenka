// React
import React from "react";

// Components
import Perks from "../../../components/Perks/Perks";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section about__content ta-center">
        <h2 className="heading-secondary section__heading">About Me</h2>
        <div className="about__introduction ma-bt--7">
          <h3 className="heading-tertiary ma-bt--1">
            Allow me to formally introduce myself. I'm Victoria.
          </h3>
          <p className="text-large">
            Since beginning my coding journey one year ago, I have dedicated
            myself to the process of web development, becoming acquainted with
            both the front and back ends of the process. My diligence has
            allowed me to gain real world experience working with clients to
            bring their ideas to life. No matter the task, I always persevere to
            bring 100% to both myself, and those that I work with.{" "}
          </p>
        </div>
        <Perks />
      </div>
    </section>
  );
};

export default About;
