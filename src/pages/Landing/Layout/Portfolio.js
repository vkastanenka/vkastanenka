// React
import React, { Component } from "react";

// Components
import Auxiliary from "../../../components/HigherOrder/Auxiliary";
import PortfolioShowcase from "../../../components/Portfolio/PortfolioShowcase";
import PortfolioPopup from "../../../components/Portfolio/PortfolioPopup";

class Portfolio extends Component {
  state = {
    viewing: "",
  };

  render() {
    let popup;
    const { viewing } = this.state;

    if (viewing === "Natours") {
      popup = (
        <PortfolioPopup
          closePopup={() => this.setState({ viewing: "" })}
          features={[
            {
              featurePhoto: require("../../../assets/img/natours--feature-1-backend.png"),
              featureName: "Fully Fleshed Out Backend",
              featureSummary:
                "RESTful API and server side rendering allows for modular and reusable design and functionality.",
            },
            {
              featurePhoto: require("../../../assets/img/natours--feature-2-stripe.png"),
              featureName: "Integrated Payment System",
              featureSummary:
                "Stripe integration with webhooks allows for full control of payment options.",
            },
            {
              featurePhoto: require("../../../assets/img/natours--feature-3-authentication.png"),
              featureName: "Complete User Authentication",
              featureSummary:
                "Users can create and edit accounts in order to process payments, write reviews, and more.",
            },
            {
              featurePhoto: require("../../../assets/img/natours--feature-4-mapbox.png"),
              featureName: "Integrated Map Functionality",
              featureSummary:
                "Mapbox integration processes point type schema values to display tour destinations.",
            },
            {
              featurePhoto: require("../../../assets/img/natours--feature-5-email.png"),
              featureName: "Integrated Email Functionality",
              featureSummary:
                "Sendgrid email delivery allows custom email templates to be utilized for a variety of purposes.",
            },
          ]}
          name="Natours"
          description="Tour Booking Platform"
          summary="Natours is a platform that allows customers to view, book, and review tours while offering administrators tools to manage the site's content."
          projectLink="https://vkastanenka-natours.herokuapp.com/"
          repositoryLink="https://github.com/vkastanenka/natours"
        />
      );
    } else if (viewing === "DevConnector") {
      popup = (
        <PortfolioPopup
          closePopup={() => this.setState({ viewing: "" })}
          features={[
            {
              featurePhoto: require("../../../assets/img/devconnector--feature-1-timeline.png"),
              featureName: "User Timelines",
              featureSummary:
                "Users can create posts on their own timelines, comment on any post, like and dislike any post or comment, and delete their own posts.",
            },
            {
              featurePhoto: require("../../../assets/img/devconnector--feature-2-follows.png"),
              featureName: "Follow System",
              featureSummary:
                "Users can follow other users to have their posts appear chronologically on their own personal timelines.",
            },
            {
              featurePhoto: require("../../../assets/img/devconnector--feature-3-authentication.png"),
              featureName: "Complete User Authentication",
              featureSummary:
                "Users can create and edit accounts in order to access the functionality of the website.",
            },
            {
              featurePhoto: require("../../../assets/img/devconnector--feature-4-profile.png"),
              featureName: "Robust Profile Customization",
              featureSummary:
                "Users can create developer profiles that appear on their user cards where they can add their education and experiences.",
            },
            {
              featurePhoto: require("../../../assets/img/devconnector--feature-5-github.png"),
              featureName: "Github Integration",
              featureSummary:
                "Users can provide their Github usernames to have links to their 5 most recent repositories available on their user card.",
            },
          ]}
          name="DevConnector"
          description="Social Media Network for Developers"
          summary="DevConnector is a social media network designed for developers in mind. Users can create an account, follow users, create posts and comments, develop profiles, and search for other developers."
          projectLink="https://vkastanenka-devconnector.herokuapp.com/"
          repositoryLink="https://github.com/vkastanenka/devconnector"
        />
      );
    }

    return (
      <Auxiliary>
        {popup}
        <section className="section portfolio" id='portfolio'>
          <h2 className="heading-secondary fc-primary-dark ma-bt--md text-shadow">
            Developer Portfolio
          </h2>
          <div className="portfolio__projects">
            <PortfolioShowcase
              name="Natours"
              build="React JS / Node.js"
              setPopup={() => this.setState({ viewing: "Natours" })}
              image={require("../../../assets/img/natours--header.png")}
            />
            <PortfolioShowcase
              name="DevConnector"
              build="React JS / Node.js"
              setPopup={() => this.setState({ viewing: "DevConnector" })}
              image={require("../../../assets/img/devconnector--user-page.png")}
            />
          </div>
        </section>
      </Auxiliary>
    );
  }
}

export default Portfolio;
