// React
import React from "react";

// Components
import ContactForm from "../../../components/Forms/Contact";

// Contact section of home page
const Contact = () => {
  return (
    <section className="contact">
      <div className="section contact__content">
        <div className="contact__card">
          <div className="contact__form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
