import React, { Component } from 'react';
import Data from '../../JsonData/Main/TestimonialsData';
class Testimonials extends React.Component {
    render() {

      var items = [];
      var itemData = Data.TESTIMONIALS.ITEMS;
      for(let i = 0; i < itemData.length; i++)
      {
          let item = itemData[i];
          items.push((
            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  {item.TEXT}
                </p>
                <img src={item.IMAGE_URL} class="testimonial-img" alt=""/>
                <h3>{item.NAME}</h3>
                <h4>{item.POSITION}</h4>
              </div>
            </div>
          ));
      }

      return (
        <section id="testimonials" class="testimonials">
      <div class="container" data-aos="zoom-in">
        <div class="quote-icon">
          <i class="bx bxs-quote-right"></i>
        </div>

        <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            {items}

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section>
        );
    }
}

export default Testimonials;