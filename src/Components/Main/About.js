import React, { Component } from 'react';
import Data from '../../JsonData/Main/AboutData';

class About extends React.Component {
    render() {
      var items = [];
      var itemData = Data.ABOUT.BODY_ITEMS;
      for(let i = 0; i < itemData.length; i++)
      {
          let item = itemData[i];
          items.push((
            <li><i class="bx bx-check-double"></i> {item.TEXT} </li>
          ));
      }

      return (
        <section id="about" class="about">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>{Data.ABOUT.TITLE}</h2>
          <p>{Data.ABOUT.TITLE_SMALL}</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-right">
            <div class="image">
              <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <div class="content pt-4 pt-lg-0 pl-0 pl-lg-3 ">
              <h3>{Data.ABOUT.BODY_1}</h3>
              <p class="font-italic">
                  {Data.ABOUT.BODY_2}
              </p>
              <ul>
                  {items}
              </ul>
              <p>
                {Data.ABOUT.BODY_3}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
        );
    }
}

export default About;