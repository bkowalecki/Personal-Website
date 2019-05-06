import React from "react";

class Slide extends React.Component {
  render() {

    const {image} = this.props;

    return (
      <div
        className="slide-container"
        style={{
            backgroundImage: `url(${image})`
        }}
      >
      
      </div>
    );
  }
}
export default Slide;
