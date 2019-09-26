import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

import "./styles.css";

const CustomElement = props => {
  return (
    <div
      className="custom-slide"
      onMouseEnter={props.mouseover.bind(this)}
      onMouseOut={props.mouseout.bind(this)}
    >
      <h3>{props.value}</h3>
    </div>
  );
};

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maintxt: 1
    };
    this.setTimeoutConst = null;
  }

  changeimg = event => {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    clearTimeout(this.setTimeoutConst);
    this.setState({ maintxt: event.target.innerText });
    // this.mainbox.current.value = 1;
  };

  resetimg = event => {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    const obj = this;
    this.setTimeoutConst = setTimeout(function() {
      obj.setState({ maintxt: 1 });
    }, 1000);
    // this.mainbox.current.value = 1;
  };

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: false,
      arrows: true,
      touchThreshold: 1000
    };

    return (
      <div className="container">
        <div className="main-box">{this.state.maintxt}</div>
        <Slider {...settings}>
          <CustomElement
            value="1"
            mouseover={this.changeimg}
            mouseout={this.resetimg}
          />
          <CustomElement
            value="2"
            mouseover={this.changeimg}
            mouseout={this.resetimg}
          />
          <CustomElement
            value="3"
            mouseover={this.changeimg}
            mouseout={this.resetimg}
          />
          <CustomElement
            value="4"
            mouseover={this.changeimg}
            mouseout={this.resetimg}
          />
        </Slider>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <ImageSlider />
      <ImageSlider />
      <ImageSlider />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
