import React, { Component } from "react";
import Slider from "react-slick";

import CollectionCard from "./CollectionCard";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./slick-slider.css";

import { Popular, AwardWining } from "../Api";

const apiPopular = Popular;
const apiAward = AwardWining;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 599,
          settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            speed: 500,
          },
        },
      ],
    };
    return (
      <section className="slider">
        <div className="container">
          <div className="content">
            <div className="title">
              <h2>Popular on Netflix</h2>
            </div>
            <Slider {...settings} className="c">
              {apiPopular.map(function card(val, i) {
                return (
                  <>
                    <CollectionCard
                      key={i}
                      titleName={val.titleName}
                      imgSrc={val.imgSrc}
                      imgAlt={val.imgAlt}
                      link={val.link}
                    />
                  </>
                );
              })}
            </Slider>
          </div>

          <div className="content">
            <div className="title">
              <h2>Award-Winning TV Shows</h2>
            </div>
            <Slider {...settings}>
              {apiAward.map(function card(val, i) {
                return (
                  <>
                    <CollectionCard
                      key={i}
                      titleName={val.titleName}
                      imgSrc={val.imgSrc}
                      imgAlt={val.imgAlt}
                      link={val.link}
                    />
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
