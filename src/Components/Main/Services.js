import React, { Component } from 'react';
import Data from '../../JsonData/Main/ServicesData';

class Services extends React.Component {
    render() {

      var items = [];
      var itemData = Data.SERVICES.ITEMS;
      for(let i = 0; i < itemData.length; i++)
      {
          let item = itemData[i];
          items.push((
            <div class= {i == 0 ? "icon-box mt-5 mt-lg-0" : "icon-box mt-5"} data-aos="fade-up" data-aos-delay={100 * i}>
              <i class={item.ICON_DATA}></i>
              <h4>{item.TITLE}</h4>
              <p>{item.BODY}</p>
            </div>
          ));
      }

      return (
        <section id="services" class="services">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>{Data.SERVICES.TITLE}</h2>
          <p>{Data.SERVICES.TITLE_SMALL}</p>
        </div>

        <div class="row">
          <div class="col-lg-6 order-2 order-lg-1">
            {items}
          </div>
          <div class="image col-lg-6 order-1 order-lg-2" style={{backgroundImage: 'url("assets/img/services.jpg")'}} data-aos="fade-left" data-aos-delay="100"></div>
        </div>

      </div>
    </section>
        );
    }
}

export default Services;