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
              featurePhoto: require("../../../assets/img/natours-f1-backend--desktop.png"),
              featurePhotoSet: `${require("../../../assets/img/natours-f1-backend--mobile.png")} 346w, ${require("../../../assets/img/natours-f1-backend--tablet.png")} 672w, ${require("../../../assets/img/natours-f1-backend--desktop.png")} 768w`,
              featurePhotoSetSizes:
                "(max-width: 25em) 346px, (max-width: 50em) 672px, 768px",
              featureName: "Fully Fleshed Out Backend",
              featureSummary:
                "RESTful API and client side rendering allows for modular and reusable design and functionality.",
            },
            {
              featurePhoto: require("../../../assets/img/natours-f2-stripe--desktop.png"),
              featurePhotoSet: `${require("../../../assets/img/natours-f2-stripe--mobile.png")} 346w, ${require("../../../assets/img/natours-f2-stripe--tablet.png")} 672w, ${require("../../../assets/img/natours-f2-stripe--desktop.png")} 768w`,
              featurePhotoSetSizes:
                "(max-width: 25em) 346px, (max-width: 50em) 672px, 768px",
              featureName: "Integrated Payment System",
              featureSummary:
                "Stripe integration with webhooks allows for full control of payment options.",
            },
            {
              featurePhoto: require("../../../assets/img/natours-f3-authentication--desktop.png"),
              featurePhotoSet: `${require("../../../assets/img/natours-f3-authentication--mobile.png")} 346w, ${require("../../../assets/img/natours-f3-authentication--tablet.png")} 672w, ${require("../../../assets/img/natours-f3-authentication--desktop.png")} 768w`,
              featurePhotoSetSizes:
                "(max-width: 25em) 346px, (max-width: 50em) 672px, 768px",
              featureName: "Complete User Authentication",
              featureSummary:
                "Users can create and edit accounts in order to process payments, write reviews, and more.",
            },
            {
              featurePhoto: require("../../../assets/img/natours-f4-mapbox--desktop.png"),
              featurePhotoSet: `${require("../../../assets/img/natours-f4-mapbox--mobile.png")} 346w, ${require("../../../assets/img/natours-f4-mapbox--tablet.png")} 672w, ${require("../../../assets/img/natours-f4-mapbox--desktop.png")} 768w`,
              featurePhotoSetSizes:
                "(max-width: 25em) 346px, (max-width: 50em) 672px, 768px",
              featureName: "Integrated Map Functionality",
              featureSummary:
                "Mapbox integration processes point type schema values to display tour destinations.",
            },
            {
              featurePhoto: require("../../../assets/img/natours-f5-email--desktop.png"),
              featurePhotoSet: `${require("../../../assets/img/natours-f5-email--mobile.png")} 346w, ${require("../../../assets/img/natours-f5-email--tablet.png")} 672w, ${require("../../../assets/img/natours-f5-email--desktop.png")} 768w`,
              featurePhotoSetSizes:
                "(max-width: 25em) 346px, (max-width: 50em) 672px, 768px",
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
    } else if (viewing === "Devbook") {
      popup = (
        <PortfolioPopup
          closePopup={() => this.setState({ viewing: "" })}
          features={[
            {
              featurePhoto: require("../../../assets/img/devbook-f1-timeline--desktop.png"),
              featurePhotoSet: `${require("../../../assets/img/devbook-f1-timeline--mobile.png")} 346w, ${require("../../../assets/img/devbook-f1-timeline--tablet.png")} 672w, ${require("../../../assets/img/devbook-f1-timeline--desktop.png")} 768w`,
              featurePhotoSetSizes:
                "(max-width: 25em) 346px, (max-width: 50em) 672px, 768px",
              featureName: "User Timelines",
              featureSummary:
                "Users can create posts on their own timelines, comment on any post, like and dislike any post or comment, and delete their own posts.",
            },
            {
              featurePhoto: require("../../../assets/img/devbook-f2-follows--desktop.png"),
              featurePhotoSet: `${require("../../../assets/img/devbook-f2-follows--mobile.png")} 346w, ${require("../../../assets/img/devbook-f2-follows--tablet.png")} 672w, ${require("../../../assets/img/devbook-f2-follows--desktop.png")} 768w`,
              featurePhotoSetSizes:
                "(max-width: 25em) 346px, (max-width: 50em) 672px, 768px",
              featureName: "Follow System",
              featureSummary:
                "Users can follow other users to have their posts appear chronologically on their own personal timelines.",
            },
            {
              featurePhoto: require("../../../assets/img/devbook-f3-authentication--desktop.png"),
              featurePhotoSet: `${require("../../../assets/img/devbook-f3-authentication--mobile.png")} 346w, ${require("../../../assets/img/devbook-f3-authentication--tablet.png")} 672w, ${require("../../../assets/img/devbook-f3-authentication--desktop.png")} 768w`,
              featurePhotoSetSizes:
                "(max-width: 25em) 346px, (max-width: 50em) 672px, 768px",
              featureName: "Complete User Authentication",
              featureSummary:
                "Users can create and edit accounts in order to access the functionality of the website.",
            },
            {
              featurePhoto: require("../../../assets/img/devbook-f4-profile--desktop.png"),
              featurePhotoSet: `${require("../../../assets/img/devbook-f4-profile--mobile.png")} 346w, ${require("../../../assets/img/devbook-f4-profile--tablet.png")} 672w, ${require("../../../assets/img/devbook-f4-profile--desktop.png")} 768w`,
              featurePhotoSetSizes:
                "(max-width: 25em) 346px, (max-width: 50em) 672px, 768px",
              featureName: "Robust Profile Customization",
              featureSummary:
                "Users can create developer profiles that appear on their user cards where they can add their education and experiences.",
            },
            {
              featurePhoto: require("../../../assets/img/devbook-f5-github--desktop.png"),
              featurePhotoSet: `${require("../../../assets/img/devbook-f5-github--mobile.png")} 346w, ${require("../../../assets/img/devbook-f5-github--tablet.png")} 672w, ${require("../../../assets/img/devbook-f5-github--desktop.png")} 768w`,
              featurePhotoSetSizes:
                "(max-width: 25em) 346px, (max-width: 50em) 672px, 768px",
              featureName: "Github Integration",
              featureSummary:
                "Users can provide their Github usernames to have links to their 5 most recent repositories available on their user card.",
            },
          ]}
          name="Devbook"
          description="Social Media Network for Developers"
          summary="Devbook is a social media network designed for developers in mind. Users can create an account, follow users, create posts and comments, develop profiles, and search for other developers."
          projectLink="https://vkastanenka-devbook.herokuapp.com/"
          repositoryLink="https://github.com/vkastanenka/devbook"
        />
      );
    }

    return (
      <Auxiliary>
        {popup}
        <section className="portfolio fc-grey-dark-3" id="portfolio">
          <div className="section portfolio__content ta-center">
            <h2 className="heading-secondary section__heading ma-bt--4">
              Developer Portfolio
            </h2>
            <div className="portfolio__projects">
              <PortfolioShowcase
                name="Natours"
                build="React JS / Node.js"
                setPopup={() => this.setState({ viewing: "Natours" })}
                image={require("../../../assets/img/natours-showcase--desktop.png")}
                imageSrcSet={`${require("../../../assets/img/natours-showcase--mobile.png")} 346w, ${require("../../../assets/img/natours-showcase--desktop.png")} 528w`}
                imageSrcSetSizes="(max-width: 25em) 346px, 528px"
              />
              <PortfolioShowcase
                name="Devbook"
                build="React JS / Node.js"
                setPopup={() => this.setState({ viewing: "Devbook" })}
                image={require("../../../assets/img/devbook-showcase--desktop.png")}
                imageSrcSet={`${require("../../../assets/img/devbook-showcase--mobile.png")} 346w, ${require("../../../assets/img/devbook-showcase--desktop.png")} 528w`}
                imageSrcSetSizes="(max-width: 25em) 346px, 528px"
              />
            </div>
          </div>
        </section>
      </Auxiliary>
    );
  }
}

export default Portfolio;
