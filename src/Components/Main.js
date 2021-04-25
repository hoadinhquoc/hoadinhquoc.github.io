import React, { Component } from 'react';
import About from "./Main/About";
import Services from "./Main/Services";
import Featured from "./Main/Featured";
import WhyUs from "./Main/WhyUs";
import Portfolio from "./Main/Portfolio";
import Testimonials from "./Main/Testimonials";
import Clients from "./Main/Clients";
import Team from "./Main/Team";
import Faq from "./Main/Faq";
import Contact from "./Main/Contact";

class Main extends React.Component {
    render() {
      return (
        <main id="main">
          <About/>
          <Services/>
          <Featured/>
          <WhyUs/>
          <Portfolio/>
          <Testimonials/>
          <Clients/>
          <Team/>
          <Faq/>
          <Contact/>
        </main>
        );
    }
}

export default Main;