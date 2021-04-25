import React, { Component } from 'react';
import Data from '../../JsonData/Main/FaqData';
class Faq extends React.Component {
    render() {

      var items = [];
      var itemData = Data.FAQ.ITEMS;
      for(let i = 0; i < itemData.length; i++)
      {
          let item = itemData[i];
          items.push((
            <li data-aos="fade-up" data-aos-delay={100 * i}>
              <a data-bs-toggle="collapse" class="collapsed" data-bs-target={"#faq"+(i+1)}>{item.QUESTION}<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-x icon-close"></i></a>
              <div id={"faq" + (i + 1)} class="collapse" data-bs-parent=".faq-list">
                <p>
                  {item.ANSWER}
                </p>
              </div>
            </li>
          ));
      }

      return (
        <section id="faq" class="faq">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>

        <ul class="faq-list">

          {items}

        </ul>

      </div>
    </section>
        );
    }
}

export default Faq;