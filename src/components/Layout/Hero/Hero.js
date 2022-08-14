import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import slide1 from '../../../assets/food1/images/home-slide-1.jpg';
import slide2 from '../../../assets/food1/images/home-slide-2.jpg';
import slide3 from '../../../assets/food1/images/home-slide-3.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="home" id="home">
      <Swiper
        modules={[Navigation]}
        grabCursor={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        centeredSlides={true}
      >
        <SwiperSlide
          className="swiper-slide slide"
          style={{
            backgroundImage: `url(${slide1})`,
          }}
        >
          <div className="content">
            <span>Would you like to see Our</span>
            <h3>Beautiful Beef Menu </h3>
            <button className="btn">get started</button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide slide"
          style={{
            backgroundImage: `url(${slide2})`,
          }}
        >
          <div className="content">
            <span>Would you like to see Our</span>
            <h3>Amazing Pizza Collection </h3>
            <button className="btn">get started</button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="swiper-slide slide"
          style={{
            backgroundImage: `url(${slide3})`,
          }}
        >
          <div className="content">
            <span>Would you like to see Our</span>
            <h3>Crispy Sea food Menu </h3>
            <button className="btn">get started</button>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </section>
  );
};

export default Hero;
