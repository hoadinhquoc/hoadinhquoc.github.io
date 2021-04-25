import React, { Component } from 'react';
import Data from '../../JsonData/Main/ClientsData';
class Clients extends React.Component {
    render() {

      var items = [];
      var itemData = Data.CLIENTS.ITEMS;
      for(let i = 0; i < itemData.length; i++)
      {
          let item = itemData[i];
          items.push((
            <div class="col-lg-2 col-md-4 col-6" data-aos="zoom-in">
              <img src={item.LOGO_URL} class="img-fluid" alt=""/>
            </div>
          ));
      }

      return (
        <section id="clients" class="clients">
      <div class="container">

        <div class="row">

          {items}

        </div>

      </div>
    </section>
        );
    }
}

export default Clients;