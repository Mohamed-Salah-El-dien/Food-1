import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faPhone,
  faEnvelope,
  faMap,
} from '@fortawesome/fontawesome-free-solid';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="icons-container">
        <div className="icons">
          <FontAwesomeIcon icon={faClock} className="i" />
          <h3>opening hours</h3>
          <p>07:00am to 10:00pm</p>
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faPhone} className="i" />
          <h3>phone</h3>
          <p>+123-456-7890</p>
          <p>+111-222-3333</p>
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faEnvelope} className="i" />
          <h3>email</h3>
          <p>**********@gmail.com</p>
          <p>**********@gmail.com</p>
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faMap} className="i" />
          <h3>address</h3>
          <p>*************</p>
        </div>
      </div>

      <div className="share">
        <FontAwesomeIcon icon={faFacebookF} className="a" />
        <FontAwesomeIcon icon={faTwitter} className="a" />
        <FontAwesomeIcon icon={faInstagram} className="a" />
        <FontAwesomeIcon icon={faLinkedin} className="a" />
      </div>
    </section>
  );
};

export default Footer;
