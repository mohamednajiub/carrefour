import React, {Component} from "react";
import Slider from "react-slick";
import "./Slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as classes from "./Slider.module.scss";
import {CarouselData} from '../../Data';

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
        pauseOnHover: true,
        dotsClass: ['slick-dots', classes.Dots].join(' ')
    };
    return (
      <div className={classes.Slider}>
        <Slider {...settings}>
            {
                CarouselData.map((carouselItem, index)=>{
                    return (
                        <div key={index} className={classes.Slide}>
                            <img src={carouselItem.source} alt={carouselItem.title} />
                        </div>
                    )
                })
            }
        </Slider>
      </div>
    );
  }
}

export default SliderComponent;
