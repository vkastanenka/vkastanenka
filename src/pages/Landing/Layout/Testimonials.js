// React
import React, { Component } from "react";

// Components
import Icon from "../../../components/Icon/Icon";
import Testimonial from "../../../components/Testimonial/Testimonial";

class Testimonials extends Component {
  state = {
    currentTestimonial: 0,
  };

  render() {
    const { currentTestimonial } = this.state;
    const testimonials = [
      <Testimonial
        image={require("../../../assets/img/rena.png")}
        testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id quod dolor enim voluptas modi quasi blanditiis quia ab tempore veniam vitae maxime recusandae reprehenderit illo qui quibusdam, eaque rerum?"
        name="Rena Pankowska"
        company="Featherbox Studio"
        websiteLink="https://featherboxstudio.com/"
      />,
      <Testimonial
        image={require("../../../assets/img/shannon.png")}
        testimonial="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam amet quos nisi vel molestiae debitis incidunt, a nihil modi aspernatur aliquid. Quos recusandae vero placeat quod quasi velit, blanditiis nemo?"
        name="Shannon Martin"
        company="Dog Days Adventures"
        websiteLink="https://www.dogdaysadventures.com/"
      />,
    ];
    const testimonialSelect = testimonials.map((t, i) =>
      i === currentTestimonial ? (
        <div
          key={i}
          className="testimonials__select-view testimonials__select-view--selected"
        />
      ) : (
        <div
          key={i}
          className="testimonials__select-view testimonials__select-view--unselected"
        />
      )
    );

    return (
      <section className="testimonials" id="testimonials">
        <div className="section testimonials__content ta-center">
          <h2 className="heading-secondary section__heading">Testimonials</h2>
          <h3 className="heading-tertiary ma-bt--2">
            From individuals who I have had the pleasure of working with.
          </h3>
          <div className="testimonials__testimonials ma-bt--3">
            {testimonials[currentTestimonial]}
          </div>
          <div className="testimonials__select">
            <Icon
              type="chevron-with-circle-left"
              className="icon icon--larger icon--black-primary icon--active icon--translate"
              onClick={() => {
                if (currentTestimonial === 0) {
                  this.setState({
                    currentTestimonial: testimonials.length - 1,
                  });
                } else {
                  this.setState((prevState) => ({
                    currentTestimonial: prevState.currentTestimonial - 1,
                  }));
                }
              }}
            />
            <div className="testimonials__selects">{testimonialSelect}</div>
            <Icon
              type="chevron-with-circle-right"
              className="icon icon--larger icon--black-primary icon--active icon--translate"
              onClick={() => {
                if (currentTestimonial === testimonials.length - 1) {
                  this.setState({ currentTestimonial: 0 });
                } else {
                  this.setState((prevState) => ({
                    currentTestimonial: prevState.currentTestimonial + 1,
                  }));
                }
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
