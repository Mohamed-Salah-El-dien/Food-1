import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Food from './Food/Food';
import Gallery from './Gallery/Gallery';
import Menu from './Menu/Menu';
import Order from './Order/Order';
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Food />
      <Gallery />
      <Menu />
      <Order />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Layout;
