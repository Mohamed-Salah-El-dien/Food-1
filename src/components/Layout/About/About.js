import React from 'react';
import about from '../../../assets/food1/images/about-img.png';
import icon1 from '../../../assets/food1/images/about-icon-1.png';
import icon2 from '../../../assets/food1/images/about-icon-2.png';
import icon3 from '../../../assets/food1/images/about-icon-3.png';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src={about} alt="" />
      </div>

      <div className="content">
        <h3 className="title">welcome to our restaurant</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio
          at, saepe accusamus dolorum, quos eos nesciunt amet exercitationem
          illum quis nostrum, repellat quaerat eum debitis fugit alias magnam
          omnis!
        </p>
        <button className="btn">read more</button>
        <div className="icons-container">
          <div className="icons">
            <img src={icon1} alt="" />
            <h3>quality food</h3>
          </div>
          <div className="icons">
            <img src={icon2} alt="" />
            <h3>food & drinks</h3>
          </div>
          <div className="icons">
            <img src={icon3} alt="" />
            <h3>expert chefs</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
