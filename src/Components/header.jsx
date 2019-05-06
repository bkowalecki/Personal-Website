import React, { Component } from "react";
import language from "../language.json";
import Typist from "react-typist";
import headerImg from "../img/cover_pic.png";

class Header extends Component {
  render() {
  
    const HeaderTypistOptions = {
      hideWhenDone: true,
      hideWhenDoneDelay: 15,
    };

    return (
      <div className="App-header">

        <div className="intro-container">
            <div className="nes-balloon from-right">
            <Typist cursor={HeaderTypistOptions} avgTypingDelay={45}>{language.header}</Typist>
            </div>
            <img src={headerImg} className="header-img" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
