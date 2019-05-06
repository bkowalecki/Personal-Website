import React, { Component } from "react";
import Typist from "react-typist";
import telescope from "../img/telescope.png";
import basketball from "../img/basketball.png";
import motorcycle from "../img/motorcycle.png";
import data from "../img/data.png";
import language from "../language.json";

class AboutMe extends Component {

  state = {
    textArea: "Click for more information!",
    showTyping: true
  };

  //
  imageClick = (text) => {
    this.setState({
      textArea: text
    });
    this.renderTypist();
  };

  renderTypist = () => {
    this.setState({ showTyping: false }, () => {
      this.setState({ showTyping: true });
    });
  };

  isOnScreen = (additional=0) => this.props.appTop > (1050 + additional);


  render() {
    // Top of page prop
    const { textArea } = this.state;

    const aboutBadgeClasses = `nes-badge ${this.isOnScreen() ? "slide" : undefined}`;

    return (
      <div className="about-me">

        <div className={aboutBadgeClasses}>
          <span className="is-error">About Me</span>
        </div>

        <div className="icon-container">
          <img
            src={telescope}
            className="about-icon"
            id="telescope"
            alt=""
            onClick={() => this.imageClick(language.telescope)}
          />
          <img
            src={basketball}
            className="about-icon"
            id="basketball"
            alt=""
            onClick={() => this.imageClick(language.basketball)}
          />
          <img
            src={motorcycle}
            className="about-icon"
            id="motorcycle"
            alt=""
            onClick={() => this.imageClick(language.motorcycle)}
          />
          <img
            src={data}
            className="about-icon"
            id="data"
            alt=""
            onClick={() => this.imageClick(language.data)}
          />
        </div>

        <div className="nes-container is-dark info-container">
          {(this.state.showTyping && this.isOnScreen(500)) && (
            <Typist
              startDelay={0}
              avgTypingDelay={50}
              stdTypingDelay={1}
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: 15 }}
            >
              {textArea}
            </Typist>
          )}
        </div>
      </div>
    );
  }
}

export default AboutMe;
