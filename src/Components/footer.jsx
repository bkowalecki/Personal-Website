import React, { Component } from "react";
import nesIcon from "../img/nes.png";
import reactIcon from "../img/react.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span>This site is powered by:</span>
        <div>
          <img src={nesIcon} alt="" className="nes-icon" />
          <img src={reactIcon} alt="" className="react-icon" />
          <span className="seal">Brandon Kowalecki</span>
        </div>
      </div>
    );
  }
}

export default Footer;
