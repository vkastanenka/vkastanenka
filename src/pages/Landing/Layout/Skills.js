// React
import React from "react";
import DevIcon from "devicon-react-svg";

const Skills = () => {
  return (
    <section className="section skills">
      <h2 className="heading-secondary fc-primary-dark ma-bt--md text-shadow">
        Technological Skills
      </h2>
      <p className="text-larger fw-medium fc-grey-dark-3 ma-bt--x-lg">
        I always enjoy learning new things. Especially technologies that make
        your company special.
      </p>
      <div className="grid grid--skills">
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
          <DevIcon icon="javascript" className="icon icon--larger icon--white" />
        </div>
        <div className="skills__skill">
          <p className="text-large fw-medium">Sass</p>
          <DevIcon icon="sass" className="icon icon--larger icon--white" />
        </div>
        <div className="skills__skill">
          <p className="text-large fw-medium">Github</p>
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
    </section>
  );
};

export default Skills;
