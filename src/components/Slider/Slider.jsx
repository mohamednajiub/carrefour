import React, {Component} from "react";
import Slider from "react-slick";
import "./Slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Slider.module.scss";

class SliderComponent extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        accessibility: false,
        arrows: false,
        pauseOnHover: true
    };
    return (
      <div className={classes.Slider}>
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderComponent;
