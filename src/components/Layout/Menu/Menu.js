import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import './Menu.css';

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="heading">
        <span>our menu</span>
        <h3>our popular dishes</h3>
      </div>

      <Swiper
        modules={[Pagination]}
        grabCursor={true}
        loop={true}
        autoHeight={true}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="slide">
          <h3 className="title">breakfast</h3>
          <div className="box-container">
            <div className="box">
              <div className="info">
                <h3>morning breakfast</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>morning breakfast</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>morning breakfast</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>morning breakfast</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>morning breakfast</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>morning breakfast</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <h3 className="title">lunch</h3>
          <div className="box-container">
            <div className="box">
              <div className="info">
                <h3>delicious lunch</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>delicious lunch</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>delicious lunch</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>delicious lunch</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>delicious lunch</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>delicious lunch</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <h3 className="title">dinner</h3>
          <div className="box-container">
            <div className="box">
              <div className="info">
                <h3>delicious dinner</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>delicious dinner</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>delicious dinner</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>delicious dinner</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>delicious dinner</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>delicious dinner</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <h3 className="title">drinks</h3>
          <div className="box-container">
            <div className="box">
              <div className="info">
                <h3>cold drinks</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>cold drinks</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>cold drinks</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>cold drinks</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>cold drinks</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>cold drinks</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide slide">
          <h3 className="title">dessert</h3>
          <div className="box-container">
            <div className="box">
              <div className="info">
                <h3>sweet dessets</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>sweet dessets</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>sweet dessets</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>sweet dessets</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>sweet dessets</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
            <div className="box">
              <div className="info">
                <h3>sweet dessets</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                  dolores.
                </p>
              </div>
              <div className="price">$49.99</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Menu;
