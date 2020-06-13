// React
import React, { Component } from "react";

// Components
import PortfolioProject from "../../../components/PortfolioProject/PortfolioProject";

class Portfolio extends Component {
  state = {
    viewing: "",
  };

  render() {
    return (
      <section className="section portfolio">
        <h2 className="heading-secondary fc-primary-dark ma-bt--md text-shadow">
          Developer Portfolio
        </h2>
        <div className="portfolio__projects">
          <PortfolioProject
            name="Natours"
            build="React JS / Node.js"
            setPopup={() => this.setState({ viewing: "Natours" })}
            image={require("../../../assets/img/natours--header.png")}
          />
          <PortfolioProject
            name="DevConnector"
            build="React JS / Node.js"
            setPopup={() => this.setState({ viewing: "DevConnector" })}
            image={require("../../../assets/img/devconnector--user-page.png")}
          />
        </div>
      </section>
    );
  }
}

export default Portfolio;
