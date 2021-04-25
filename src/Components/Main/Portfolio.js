import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import Data from '../../JsonData/Main/PortfolioData';
class Portfolio extends React.Component {
    render() {
      var items = [];
      var itemData = Data.PORTFOLIO.Item;
      for(let i = 0; i < itemData.length; i++)
      {
          let item = itemData[i];
          items.push(<PortfolioItem 
                                    title={item.title} 
                                    productImgURL={item.productImgURL}
                                    playstoreURL={item.playstoreURL}
                                    appstoreURL={item.appstoreURL}
                                    playDirectURL={item.playDirectURL}
                                    smallDescription={item.smallDescription}
                                     />);
      }

      return (
        <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>{Data.PORTFOLIO.TITLE}</h2>
          <p>{Data.PORTFOLIO.TEXT}</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="100">
          {/* <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div> */}
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
              {items}
        </div>

      </div>
    </section>
        );
    }
}

export default Portfolio;