import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar } from '@fortawesome/fontawesome-free-solid';
import img1 from '../../../assets/food1/images/food-img-1.png';
import img2 from '../../../assets/food1/images/food-img-2.png';
import img3 from '../../../assets/food1/images/food-img-3.png';
import img4 from '../../../assets/food1/images/food-img-4.png';
import img5 from '../../../assets/food1/images/food-img-5.png';
import './Food.css';

const Food = () => {
  const [slide1, setSlide1] = useState(false);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const [slide5, setSlide5] = useState(false);
  const [toggleSlide, setToggleSlide] = useState(false);

  const handleSlide1 = () => {
    setSlide1(!slide1);
    setToggleSlide(true);
  };

  const handleSlide2 = () => {
    setSlide2(!slide2);
    setToggleSlide(true);
  };

  const handleSlide3 = () => {
    setSlide3(!slide3);
    setToggleSlide(true);
  };

  const handleSlide4 = () => {
    setSlide4(!slide4);
    setToggleSlide(true);
  };

  const handleSlide5 = () => {
    setSlide5(!slide5);
    setToggleSlide(true);
  };

  const handleClose = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(false);
    setSlide4(false);
    setSlide5(false);
    setToggleSlide(false);
  };

  return (
    <div>
      <section className="food" id="food">
        <div className="heading">
          <span>popular dishes</span>
          <h3>our delicious food</h3>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            500: {
              width: 500,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            991: {
              width: 991,
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="swiper-slide slide" onClick={handleSlide1}>
            <img src={img1} alt="" />
            <h3>delicious food</h3>
            <div className="price">$49.99</div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide slide" onClick={handleSlide2}>
            <img src={img2} alt="" />
            <h3>delicious food</h3>
            <div className="price">$49.99</div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide slide" onClick={handleSlide3}>
            <img src={img3} alt="" />
            <h3>delicious food</h3>
            <div className="price">$49.99</div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide slide" onClick={handleSlide4}>
            <img src={img4} alt="" />
            <h3>delicious food</h3>
            <div className="price">$49.99</div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide slide" onClick={handleSlide5}>
            <img src={img5} alt="" />
            <h3>delicious food</h3>
            <div className="price">$49.99</div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* ************************************************ */}
      {/* ************************************************ */}
      {/* ************************************************ */}
      <section
        className={
          toggleSlide
            ? 'food-preview-container active'
            : 'food-preview-container'
        }
      >
        <div>
          <FontAwesomeIcon
            icon={faTimes}
            className="close-preview"
            onClick={handleClose}
          />
        </div>

        <div className={slide1 ? 'food-preview active' : 'food-preview'}>
          <img src={img1} alt="" />
          <h3>delicious food</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            hic!
          </p>
          <div className="price">$49.99</div>
          <button className="btn white">buy now</button>
        </div>

        <div className={slide2 ? 'food-preview active' : 'food-preview'}>
          <img src={img2} alt="" />
          <h3>delicious food</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            hic!
          </p>
          <div className="price">$49.99</div>
          <button className="btn white">buy now</button>
        </div>

        <div className={slide3 ? 'food-preview active' : 'food-preview'}>
          <img src={img3} alt="" />
          <h3>delicious food</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            hic!
          </p>
          <div className="price">$49.99</div>
          <button className="btn white">buy now</button>
        </div>

        <div className={slide4 ? 'food-preview active' : 'food-preview'}>
          <img src={img4} alt="" />
          <h3>delicious food</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            hic!
          </p>
          <div className="price">$49.99</div>
          <button className="btn white">buy now</button>
        </div>

        <div className={slide5 ? 'food-preview active' : 'food-preview'}>
          <img src={img5} alt="" />
          <h3>delicious food</h3>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
            <FontAwesomeIcon icon={faStar} className="i" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            hic!
          </p>
          <div className="price">$49.99</div>
          <button className="btn white">buy now</button>
        </div>
      </section>
    </div>
  );
};

export default Food;
