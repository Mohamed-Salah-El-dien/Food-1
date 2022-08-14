import React from 'react';
import './Order.css';

const Order = () => {
  return (
    <section className="order" id="order">
      <div className="heading">
        <span>order now</span>
        <h3>fast home delivery</h3>
      </div>

      <form action="">
        <div className="box-container">
          <div className="box">
            <div className="inputBox">
              <span>full name</span>
              <input type="text" placeholder="enter your name" />
            </div>
            <div className="inputBox">
              <span>food name</span>
              <input type="text" placeholder="food you want" />
            </div>
            <div className="inputBox">
              <span>order details</span>
              <input type="text" placeholder="specifics with food" />
            </div>
            <div className="inputBox">
              <span>your address</span>
              <textarea
                name=""
                placeholder="enter your address"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="box">
            <div className="inputBox">
              <span>number</span>
              <input type="number" placeholder="enter your number" />
            </div>
            <div className="inputBox">
              <span>how much</span>
              <input type="number" placeholder="how many you want" />
            </div>
            <div className="inputBox">
              <span>when you want</span>
              <input type="datetime-local" />
            </div>
            <div className="inputBox">
              <span>our address</span>
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10550.893240663032!2d31.169420218719893!3d30.978743620392432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7a308cb971129%3A0x56c84a08472a37b4!2z2KzZiNiv2Ko!5e0!3m2!1sen!2seg!4v1646186591708!5m2!1sen!2seg"
                allowfullscreen=""
                loading="lazy"
                title="map"
              />
            </div>
          </div>
        </div>
        <input type="submit" value="order now" className="btn white" />
      </form>
    </section>
  );
};

export default Order;
