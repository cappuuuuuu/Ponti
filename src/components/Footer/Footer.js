import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="description">
          <img src={require('../../assets/image/ponti_wine_cellars-logo BLACK.png')} alt=""/>
          <p>Ponti Wine Cellars is an online wine shop in Hong Kong. We offer a comprehensive range of top quality wines from all over the world such as USA, Italy, France, Spain, Argentina, Chile and etc.</p>
        </div>
        <div className="quick-link">
          <ul className="link">
            <li className="separate">ABOUT US</li>
            <li className="separate">SHOP</li>
            <li>WINE CLUB BENEFIT</li>
          </ul>
          <ul className="link">
            <li className="separate">OUR STORES</li>
            <li className="separate">CONTACT US</li>
            <li>FAQ</li>
          </ul>
          <ul className="link">
            <li>SITE MAP</li>
          </ul>
          <div className="email">
            <p>NEWSLETTER</p>
            <input type="text" placeholder="Email Address"/>
            <button>SUBSCRIBE</button>
          </div>
          <div className="social-icon">
            <div className="img-wrapper">
              <img src={require('../../assets/image/facebook-square-brands.svg')} alt="facebook-icon"/>
              <img src={require('../../assets/image/instagram-brands.svg')}  alt="instagram-icon"/>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="statement">
          <p>Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor in the course of business.</p>
          <p>根據香港法律，不得在業務過程中，向未成年人售賣或供應令人醺醉的酒類。</p>
          <p>@ 2020,Ponti Wine Cellars<span>Terms of Use &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Cookies Policy</span></p>
        </div>
        <ul className="payment">
          <li><img src={require('../../assets/image/express.png')} alt=""/></li>
          <li><img src={require('../../assets/image/applepay.png')} alt=""/></li>
          <li><img src={require('../../assets/image/visa.png')} alt=""/></li>
          <li><img src={require('../../assets/image/mastercard.png')} alt=""/></li>
          <li><img src={require('../../assets/image/googlepay.png')} alt=""/></li>
          <li><img src={require('../../assets/image/paypal.png')} alt=""/></li>
        </ul>
      </div>
    </div>
    
  );
}

export default Footer;
