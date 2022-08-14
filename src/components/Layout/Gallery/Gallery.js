import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import img1 from '../../../assets/food1/images/food-galler-img-1.jpg';
import img2 from '../../../assets/food1/images/food-galler-img-2.jpg';
import img3 from '../../../assets/food1/images/food-galler-img-3.jpg';
import img4 from '../../../assets/food1/images/food-galler-img-4.jpg';
import img5 from '../../../assets/food1/images/food-galler-img-5.jpg';
import img6 from '../../../assets/food1/images/food-galler-img-6.jpg';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <span>our gallery</span>
        <h3>our untold stories</h3>
      </div>

      <LightGallery elementClassNames="gallery-container">
        <a href={img1} className="box">
          <img src={img1} alt="" />
          <div className="icon">
            <FontAwesomeIcon icon={faPlus} className="i" />
          </div>
        </a>

        <a href={img2} className="box">
          <img src={img2} alt="" />
          <div className="icon">
            <FontAwesomeIcon icon={faPlus} className="i" />
          </div>
        </a>

        <a href={img3} className="box">
          <img src={img3} alt="" />
          <div className="icon">
            <FontAwesomeIcon icon={faPlus} className="i" />
          </div>
        </a>

        <a href={img4} className="box">
          <img src={img4} alt="" />
          <div className="icon">
            <FontAwesomeIcon icon={faPlus} className="i" />
          </div>
        </a>

        <a href={img5} className="box">
          <img src={img5} alt="" />
          <div className="icon">
            <FontAwesomeIcon icon={faPlus} className="i" />
          </div>
        </a>

        <a href={img6} className="box">
          <img src={img6} alt="" />
          <div className="icon">
            <FontAwesomeIcon icon={faPlus} className="i" />
          </div>
        </a>
      </LightGallery>
    </section>
  );
};

export default Gallery;
