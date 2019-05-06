import React, { Component } from "react";
import "nes.css/css/nes.css";
import Header from "./Components/header";
import MyWork from "./Components/myWork";
import AboutMe from "./Components/aboutMe";
import ContactMe from "./Components/contactMe";
import Footer from "./Components/footer";
import "./App.css";
import "./swiper.css"
class App extends Component {

  // Holds position of window top, updates on every re-render (scroll)
  state = {
    y_top: 0
  };

  // Binds handleScroll to App
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  // Mounts event listener to App on load
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Removes event listener upon exit
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Params: event(the scroll object) | Updates y_top
  handleScroll(event) {
    this.setState({
      ...this.state,
      y_top: event.target.scrollingElement.scrollTop
    });
  }

  render() {
    // Assigns the state to a variable to be passed as a prop to the components
    const {y_top} = this.state;
    console.log(y_top);

    // App.js will re-render and send y_top to every component on every scroll
    return (
      <div className="App">
        <Header appTop={y_top} />
        <MyWork appTop={y_top} />

        <div className="bg2" />
        <AboutMe appTop={y_top} />
        <div className="bg3" />

        <ContactMe appTop={y_top} />
        <Footer appTop={y_top} />
      </div>
    );
  }
}

export default App;
