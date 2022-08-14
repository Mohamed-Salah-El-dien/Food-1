/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser } from '@fortawesome/fontawesome-free-solid';
import img1 from '../../../assets/food1/images/blog-img-1.jpg';
import img2 from '../../../assets/food1/images/blog-img-2.jpg';
import img3 from '../../../assets/food1/images/blog-img-3.jpg';
import img4 from '../../../assets/food1/images/blog-img-4.jpg';
import img5 from '../../../assets/food1/images/blog-img-5.jpg';
import img6 from '../../../assets/food1/images/blog-img-6.jpg';
import './Blogs.css';

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>our blogs</span>
        <h3>our latest posts</h3>
      </div>

      <Swiper
        modules={[Pagination]}
        grabCursor={true}
        loop={true}
        autoHeight={true}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          500: {
            width: 500,
            slidesPerView: 1,
          },
          // when window width is >= 768px
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
        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={img1} alt="" />
            <span>burger</span>
          </div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faCalendar} className="i" /> 21st may,
                2022
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faUser} className="i" /> by admin
              </a>
            </div>
            <a href="#" className="title">
              blog title goes here
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              reprehenderit!
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={img2} alt="" />
            <span>sandwich</span>
          </div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faCalendar} className="i" /> 21st may,
                2022
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faUser} className="i" /> by admin
              </a>
            </div>
            <a href="#" className="title">
              blog title goes here
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              reprehenderit!
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={img3} alt="" />
            <span>chicken</span>
          </div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faCalendar} className="i" /> 21st may,
                2022
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faUser} className="i" /> by admin
              </a>
            </div>
            <a href="#" className="title">
              blog title goes here
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              reprehenderit!
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={img4} alt="" />
            <span>ice-cream</span>
          </div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faCalendar} className="i" /> 21st may,
                2022
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faCalendar} className="i" /> by admin
              </a>
            </div>
            <a href="#" className="title">
              blog title goes here
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              reprehenderit!
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={img5} alt="" />
            <span>pizza</span>
          </div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faCalendar} className="i" /> 21st may,
                2022
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faUser} className="i" /> by admin
              </a>
            </div>
            <a href="#" className="title">
              blog title goes here
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              reprehenderit!
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <div className="image">
            <img src={img6} alt="" />
            <span>coffee</span>
          </div>
          <div className="content">
            <div className="icon">
              <a href="#">
                <FontAwesomeIcon icon={faCalendar} className="i" /> 21st may,
                2022
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faUser} className="i" /> by admin
              </a>
            </div>
            <a href="#" className="title">
              blog title goes here
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              reprehenderit!
            </p>
            <button className="btn">read more</button>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Blogs;
