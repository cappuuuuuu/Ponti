import React from 'react';
import './Widget.scss';
import widget1 from '../../assets/image/image-53-4.png'
import widget2 from '../../assets/image/image-54-4.png'
import widget3 from '../../assets/image/image-55.png'

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
              Spend <b>HK$1,800</b> to enjoy freedelivery to a single location in Hong Kong Island, Kowloon or New Territories
          </p>
        </li>
      </ul>
      <div className="border-line"></div>
      <ul className="widget-square">
        <li className="widget-square-item">
          <div className="info">
            <h5>Shop Promotions</h5>
            <p>Check out the latest offers in shops!</p>
          </div>
        </li>
        <li className="widget-square-item">
          <div className="info">
            <h5>Smart Buys</h5>
            <p>Well-priced, high-quality wines!</p>
          </div>
        </li>
        <li className="widget-square-item">
          <div className="info">
            <h5>Top Rated Wines</h5>
            <p>Wine scores 90 points or higher!</p>
          </div>
        </li>
        <li className="widget-square-item">
          <div className="info">
            <h5>Events</h5>
            <p>What is happening now!</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Widget;
