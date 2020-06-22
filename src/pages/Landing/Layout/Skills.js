// React
import React from "react";
import DevIcon from "devicon-react-svg";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section skills__content ta-center">
        <h2 className="heading-secondary section__heading">
          Technological Skills
        </h2>
        <h3 className="heading-tertiary ma-bt--3">
          I always enjoy learning new things.
        </h3>
        <div className="grid grid--skills fc-grey-light-1">
          <div className="skills__skill">
            <p className="text-large fw-medium">Semantic HTML5</p>
            <DevIcon icon="html5" className="icon icon--larger icon--white" />
          </div>
          <div className="skills__skill">
            <p className="text-large fw-medium">Responsive CSS3</p>
            <DevIcon icon="css3" className="icon icon--larger icon--white" />
          </div>
          <div className="skills__skill">
            <p className="text-large fw-medium">Interactive JavaScript</p>
            <DevIcon
              icon="javascript"
              className="icon icon--larger icon--white"
            />
          </div>
          <div className="skills__skill">
            <p className="text-large fw-medium">Sass</p>
            <DevIcon icon="sass" className="icon icon--larger icon--white" />
          </div>
          <div className="skills__skill">
            <p className="text-large fw-medium">Git / Github</p>
            <DevIcon icon="github" className="icon icon--larger icon--white" />
          </div>
          <div className="skills__skill">
            <p className="text-large fw-medium">React / Redux</p>
            <DevIcon icon="react" className="icon icon--larger icon--white" />
          </div>
          <div className="skills__skill">
            <p className="text-large fw-medium">Node.js / Express</p>
            <DevIcon icon="nodejs" className="icon icon--larger icon--white" />
          </div>
          <div className="skills__skill">
            <p className="text-large fw-medium">MongoDB / Mongoose</p>
            <DevIcon icon="mongodb" className="icon icon--larger icon--white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
