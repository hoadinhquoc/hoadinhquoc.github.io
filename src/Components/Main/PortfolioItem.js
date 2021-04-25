import React, { Component } from 'react';

class PortfolioItem extends React.Component {
    render() {
      let hasPlayNow = this.props.playDirectURL != "#";
      let hasPlayStoreURL = this.props.playstoreURL != "#";
      let hasAppstoreURL = this.props.appstoreURL != "#";

      let links = [];
      if(hasPlayNow)
        links.push(<a href={this.props.playDirectURL} title="Play now" target="_blank"><i class="bx bx-play-circle"></i></a>);
      if(hasAppstoreURL)
        links.push(<a href={this.props.appstoreURL} title="Appstore" target="_blank"><i class="bx bxl-apple"></i></a>);
      if(hasPlayStoreURL)
        links.push(<a href={this.props.playstoreURL} title="Google Play Store" target="_blank"><i class="bx bxl-play-store"></i></a>);
      
        return (
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src={this.props.productImgURL} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>{this.props.title}</h4>
              <p>{this.props.smallDescription}</p>
              <div class="portfolio-links">
                {links}
              </div>
            </div>
          </div>
        </div>
        );
    }

}
PortfolioItem.defaultProps = {
  playstoreURL: "#",
  appstoreURL: "#",
  playDirectURL: "#",
};
export default PortfolioItem;