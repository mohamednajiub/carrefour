import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as classes from "./Carousel.module.scss";
import {CarouselData} from '../../Data';
import {FaAngleRight} from 'react-icons/fa'
import LinkButton  from '../UI/LinkButton/LinkButton'

class Carousel extends Component {
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
        dotsClass: ['slick-dots', classes.Dots].join(' '),
    };
    return (
        <Slider {...settings} className={classes.Slider}>
            {
                CarouselData.map((carouselItem, index)=>{
                    return (
                        <div key={index} className={classes.Slide}>
                            <img src={carouselItem.source} alt={carouselItem.title} />
                            {
                                carouselItem.title||carouselItem.details?
                                <div className={classes.Overlay}>
                                    <h2>{carouselItem.title}</h2>
                                    <p>{carouselItem.details}</p>
                                    {
                                        carouselItem.link?
                                            <LinkButton link={carouselItem.link} className={classes.SliderLink}><FaAngleRight /></LinkButton>
                                        :null
                                    }
                                </div>:null
                            }
                        </div>
                    )
                })
            }
        </Slider>
    );
  }
}

export default Carousel;
