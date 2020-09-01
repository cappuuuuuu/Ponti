import React from 'react';
import './Widget.scss';
import widget1 from '../../assets/image-53-4.png'
import widget2 from '../../assets/image-54-4.png'
import widget3 from '../../assets/image-55.png'

function Widget() {
  return (
    <div className="widget-container">
      <ul className="widget-round">
        <li className="widget-round-item">
          <img src={widget1} alt=""/>
          <h3>Trusted Wine Delivery Service</h3>
          <p>Deliver Wines with Our New Temperature Controlled Truck</p>
        </li>
        <li className="widget-round-item">
          <img src={widget2} alt=""/>
          <h3>Incredible Value Premium Wines</h3>
          <p>Work with Producers and Negociants to Bring You Best Value Wines</p>
        </li>
        <li className="widget-round-item">
          <img src={widget3} alt=""/>
          <h3>Free Delivery</h3>
          <p>
              Spend HK$1,800 to enjoy freedelivery to a single location in Hong Kong Island, Kowloon or New Territories
          </p>
        </li>
      </ul>
      <div className="border-line"></div>
      <ul className="widget-square">
        <li className="widget-square-item">
          <img src={require('../../assets/heightlight-desktop-1.png')} alt=""/>
          <div className="info">
            <h3>Shop Promotions</h3>
            <p>Check out the latest offers in shops!</p>
          </div>
        </li>
        <li className="widget-square-item">
          <img src={require('../../assets/heightlight-desktop-2.png')} alt=""/>
          <div className="info">
            <h3>Smart Buys</h3>
            <p>Well-priced, high-quality wines!</p>
          </div>
        </li>
        <li className="widget-square-item">
          <img src={require('../../assets/heightlight-desktop-3.png')} alt=""/>
          <div className="info">
            <h3>Top Rated Wines</h3>
            <p>Wine scores 90 points or higher!</p>
          </div>
        </li>
        <li className="widget-square-item">
          <img src={require('../../assets/heightlight-desktop-4.png')} alt=""/>
          <div className="info">
            <h3>Events</h3>
            <p>What is happening now!</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Widget;