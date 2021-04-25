import React, { Component } from 'react';
import Data from '../JsonData/HeroSectionData';

class HeroSection extends React.Component {
    render() {
      return (
        <section id="hero">
            <div class="hero-container">
                <a href="index.html" class="hero-logo" data-aos="zoom-in"><img src="assets/img/hero-logo.png" alt=""/></a>
                <h1 data-aos="zoom-in">{Data.HERO.WELCOME}</h1>
                <h2 data-aos="fade-up">{Data.HERO.SMALL_INTRODUCTION}</h2>
                <a data-aos="fade-up" data-aos-delay="200" href="#about" class="btn-get-started scrollto">{Data.HERO.GET_START}</a>
            </div>
        </section>
        );
    }
}

export default HeroSection;