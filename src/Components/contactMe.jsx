import React, { Component } from "react";
import contactImg from "../img/contact_me.jpg";

class ContactMe extends Component {
  render() {

    const { appTop } = this.props;

    const contactBadgeClasses = `nes-badge ${appTop > 1900 ? "slide" : undefined}`;
    const imgBadgeClasses = `contact-img-container ${appTop > 2000 ? "slide" : undefined}`;
    return (
      <div className="contact-me">

        <div className={contactBadgeClasses}>
          <span className="is-error">Contact Me</span>
        </div>

        <div className={imgBadgeClasses}>
          <img src={contactImg} alt="" className="contact-img"></img>
        </div>

        <div className="contact-btn-container">
          <button
            type="button"
            className="nes-btn is-primary message">
            Message Me
          </button>
          <a href="https://www.linkedin.com/in/bkowalecki/" target="_blank">
            <button
              type="button"
              className="nes-btn is-primary linked-in">
              Linked-In
            </button>
          </a>
        </div>

      </div>
    );
  }
}

export default ContactMe;

