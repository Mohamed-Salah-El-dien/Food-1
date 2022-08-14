/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBars } from '@fortawesome/fontawesome-free-solid';
import './Header.css';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <section className="header">
      <a href="#" className="logo">
        <FontAwesomeIcon icon={faUtensils} className="i" /> food 1
      </a>

      <nav className={toggleMenu ? 'navbar active' : 'navbar'}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#food">food</a>
        <a href="#gallery">gallery</a>
        <a href="#menu">menu</a>
        <a href="#order">order</a>
        <a href="#blogs">blogs</a>
      </nav>

      <div>
        <FontAwesomeIcon
          icon={faBars}
          className="menu-btn"
          onClick={handleMenu}
        />
      </div>
    </section>
  );
};

export default Header;
