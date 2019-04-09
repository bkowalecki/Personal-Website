import React, { Component } from 'react';
import 'nes.css/css/nes.css';

import Typist from 'react-typist';
import headerImg from './img/cover_pic.png';
import MyWork from './Components/myWork';
import AboutMe from './Components/aboutMe';
import ContactMe from './Components/contactMe';
import Footer from './Components/footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
        <div class="nes-balloon from-right">
        <Typist>Hello and welcome to my website! My name is Brandon and I'm a student at the University of Pittsburgh</Typist>
        </div>
          <img src={headerImg} className="App-logo" alt="logo" />
        </header>

      <MyWork></MyWork>
      <div className="bg2"></div>
      <AboutMe></AboutMe>
      <div className="bg3"></div>
      <ContactMe></ContactMe>
      <Footer></Footer>


      </div>
    );
  }
}

export default App;
