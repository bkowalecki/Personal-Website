import React, { Component } from "react";
import WorkSwiper from "./workSwiper.jsx";

class MyWork extends Component {
  render() {
    const { appTop } = this.props;

    const workBadgeClasses = `nes-badge ${appTop > 50 ? "slide" : undefined}`;

    const workTableClasses =
      "nes-container with-title is-centered is-dark work-container";

    return (
      <div className="my-work">

        <div className={workBadgeClasses}>
          <span className="is-error">My Work</span>
        </div>

        <div className="swiper-container">
          <WorkSwiper />
        </div>
        
        <div className={workTableClasses}>
          <p className="title">Experience with</p>

          <div className="exp-table">
            <div className="exp-cell">HTML (XML,JSX)</div>
            <div className="exp-cell">CSS (Bootstrap)</div>
            <div className="exp-cell">
              JavaScript (JQuery, React, Typescript, Redux, Hooks)
            </div>
            <div className="exp-cell">Python (Flask, Anaconda)</div>
            <div className="exp-cell">Java</div>
            <div className="exp-cell">C (Linux)</div>
            <div className="exp-cell">C++</div>
            <div className="exp-cell">Git</div>
            <div className="exp-cell">NPM/Yarn</div>
            <div className="exp-cell">Turning it off and back on</div>
            <div className="exp-cell">SQL (RDBMS)</div>
            <div className="exp-cell">REST APIs</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyWork;
