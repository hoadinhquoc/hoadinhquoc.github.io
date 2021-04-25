import React, { Component } from 'react';
import Data from '../../JsonData/Main/WhyUsData';
class WhyUs extends React.Component {
    render() {
      var items = [];
      var itemData = Data.WHY_US.QUESTIONS;
      for(let i = 0; i < itemData.length; i++)
      {
          let item = itemData[i];
          items.push((
                <li data-aos="fade-up" data-aos-delay={100 * i}>
                  <a data-bs-toggle="collapse" class={i == 0 ? "collapse" : "collapsed"} data-bs-target={"#accordion-list-" + (i+1)}><span>0{i+1}</span> {item.QUESTION} <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id={"accordion-list-" + (i + 1)} class={"collapse" + (i == 0 ? " show" : "")} data-bs-parent=".accordion-list">
                    <p>
                      {item.ANSWERS}
                    </p>
                  </div>
                </li>
          ));
      }

      return (
        <section id="why-us" class="why-us">
      <div class="container-fluid">

        <div class="row">

          <div class="col-lg-7 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-stretch">

            <div class="content" data-aos="fade-up">
              <h3>{Data.WHY_US.TEXT_1}</h3>
              <p>
                  {Data.WHY_US.TEXT_2}
              </p>
            </div>

            <div class="accordion-list">
              <ul>
                {/* <li data-aos="fade-up" data-aos-delay="100">
                  <a data-bs-toggle="collapse" class="collapse" data-bs-target="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" class="collapse show" data-bs-parent=".accordion-list">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" class="collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" class="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" class="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" class="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </p>
                  </div>
                </li> */}
                {items}
              </ul>
            </div>

          </div>

          <div class="col-lg-5 order-1 order-lg-2 align-items-stretch video-box" style={{backgroundImage: 'url("'+Data.WHY_US.VIDEO_BG_IMAGE_URL+'")'}} data-aos="zoom-in">
            <a href={Data.WHY_US.VIDEO_URL} class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

        </div>

      </div>
    </section>
        );
    }
}

export default WhyUs;