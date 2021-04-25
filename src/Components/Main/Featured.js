import React, { Component } from 'react';
import Data from '../../JsonData/Main/FeaturedData';

class Featured extends React.Component {
    render() {

      var itemImages = [];
      var itemFeatures = [];
      var itemData = Data.FEATURED.ITEMS;
      for(let i = 0; i < itemData.length; i++)
      {
          let item = itemData[i];
          itemImages.push((
              <div class={"tab-pane" + (i == 0 ?" active show" : "")} id={"tab-" + (i + 1)}>
                <figure>
                  <img src={item.IMG_SRC} alt="" class="img-fluid"/>
                </figure>
              </div>
          ));

          itemFeatures.push((
              <li class={"nav-item" + (i == 0 ? "" : " mt-2")}>
                <a class={"nav-link" + (i == 0 ?" active show" : "")} data-bs-toggle="tab" href={"#tab-" + (i + 1)}>
                  <h4>{item.TEXT_1}</h4>
                  <p>{item.TEXT_2}</p>
                </a>
              </li>
          ));
      }

      return (
        <section id="featured" class="featured">
      <div class="container">

        <div class="row">
          <div class="col-lg-6" data-aos="fade-right">
            <div class="tab-content">
              {itemImages}
            </div>
          </div>
          <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left">
            <ul class="nav nav-tabs flex-column">
              {itemFeatures}
            </ul>
          </div>
        </div>

      </div>
    </section>
        );
    }
}

export default Featured;