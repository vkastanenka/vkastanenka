// React
import React, { Component } from "react";

// Utilities
import emailjs from 'emailjs-com';

// Components
import Alert from "../Alert/Alert";
import InputGroup from "../Inputs/InputGroup";
import TextAreaGroup from "../Inputs/TextAreaGroup";
import Auxiliary from "../HigherOrder/Auxiliary";

// Contact form for home page where anyone can send an email to the admin of the site
class Contact extends Component {
  state = {
    user: process.env.REACT_APP_EMAILJS_USERID,
    template: process.env.REACT_APP_EMAILJS_TEMPLATEID,
    receiverEmail: process.env.REACT_APP_EMAILJS_RECEIVER,
    senderName: "",
    senderEmail: "",
    senderPhoneNumber: "",
    senderText: "",
    submitting: false,
    submitted: false,
    disableSubmitButton: false,
    emailError: false,
  };

  // Binding timer to component instance
  timer = null;

  // State handler for input fields
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      user,
      template,
      receiverEmail,
      senderName,
      senderEmail,
      senderPhoneNumber,
      senderText,
    } = this.state;

    this.sendFeedback(
      template,
      senderName,
      senderEmail,
      senderPhoneNumber,
      senderText,
      receiverEmail,
      user
    );
  };

  sendFeedback = async (
    templateId,
    senderName,
    senderEmail,
    senderPhoneNumber,
    senderText,
    receiverEmail,
    user
  ) => {
    try {
      this.setState({ submitting: true });
      await emailjs.send(
        "default_service",
        templateId,
        {
          senderName,
          senderEmail,
          senderPhoneNumber,
          senderText,
          receiverEmail,
        },
        user
      );
      this.setState({
        senderName: "",
        senderEmail: "",
        senderPhoneNumber: "",
        senderText: "",
        submitting: false,
        submitted: true,
        disableSubmitButton: false,
      });
      this.timer = setTimeout(() => this.setState({ submitted: false }), 5000);
    } catch (err) {
      this.setState({ submitting: false, emailError: true });
      this.timer = setTimeout(() => this.setState({ emailError: false }), 5000);
    }
  };

  render() {
    return (
      <Auxiliary>
        {this.state.submitted ? (
          <Alert type="success" message="Email sent!" />
        ) : null}
        {this.state.emailError ? (
          <Alert
            type="error"
            message="Problem sending email, please try again later!"
          />
        ) : null}
        <form onSubmit={this.handleSubmit} className="form fc-grey-dark-3">
          <div className="ma-bt--md">
            <h2 className="heading-secondary section__heading">
              Contact Me
            </h2>
          </div>
          <InputGroup
            type="text"
            name="senderName"
            id="senderName"
            htmlFor="senderName"
            placeholder="Full name"
            value={this.state.senderName}
            required={true}
            onChange={(e) => this.onChange(e)}
            label="Full name"
          />
          <InputGroup
            type="senderEmail"
            name="senderEmail"
            id="senderEmail"
            htmlFor="senderEmail"
            placeholder="Email address"
            value={this.state.senderEmail}
            required={true}
            onChange={(e) => this.onChange(e)}
            label="Email address"
          />
          <InputGroup
            type="tel"
            name="senderPhoneNumber"
            id="senderPhoneNumber"
            value={this.state.senderPhoneNumber}
            htmlFor="senderPhoneNumber"
            placeholder="Phone number (###-###-####)"
            required={true}
            onChange={(e) => this.onChange(e)}
            label="Phone number (###-###-####)"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <TextAreaGroup
            name="senderText"
            id="senderText"
            inputClassName="form__textarea"
            placeholder="Write your email here"
            value={this.state.senderText}
            required={true}
            onChange={(e) => this.onChange(e)}
            htmlFor="senderText"
            label="Contact Body"
          />
          <div className="form__group">
            <button
              type="submit"
              className="btn btn--large btn--ghost-border btn--shadow"
              disabled={this.state.disableSubmitButton}
            >
              {!this.state.submitting ? "Submit email" : "Submitting email..."}
            </button>
          </div>
        </form>
      </Auxiliary>
    );
  }
}

export default Contact;
