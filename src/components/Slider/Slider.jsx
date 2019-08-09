import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as classes from "./Slider.module.scss";
import {CategoriesSlider} from '../../Data';

class SliderComponent extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        accessibility: true,
        arrows: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 594,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className={classes.Slider}>
            <Slider {...settings}>
                {
                    CategoriesSlider.map((sliderItem, index)=>{
                        return (
                            <div key={index} className={classes.Slide}>
                                <div className={classes.ImageContainer}>
                                    <img src={sliderItem.source} alt={sliderItem.title} />
                                </div>
                                <h3>{sliderItem.title}</h3>
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