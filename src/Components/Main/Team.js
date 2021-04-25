import React, { Component } from 'react';
import Data from '../../JsonData/Main/TeamData';
class Team extends React.Component {
    render() {

      var items = [];
      var itemData = Data.TEAM.ITEMS;
      for(let i = 0; i < itemData.length; i++)
      {
          let item = itemData[i];
          items.push((
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="zoom-in" data-aos-delay={100 * i}>
                <div class="member-img">
                  <img src={item.AVATAR_URL} class="img-fluid" alt=""/>
                  <div class="social">
                    <a href={item.TWITTER_LINK}><i class="bi bi-twitter"></i></a>
                    <a href={item.FACEBOOK_LINK}><i class="bi bi-facebook"></i></a>
                    <a href={item.INSTAGRAM_LINK}><i class="bi bi-instagram"></i></a>
                    <a href={item.LINKEDIN_LINK}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>{item.NAME}</h4>
                  <span>{item.POSITION}</span>
                  <p>{item.TEXT}</p>
                </div>
              </div>
            </div>
          ));
      }

      return (
        <section id="team" class="team">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>{Data.TEAM.TITLE}</h2>
          <p>{Data.TEAM.TEXT}</p>
        </div>

        <div class="row">

          {items}

        </div>

      </div>
    </section>
        );
    }
}

export default Team;