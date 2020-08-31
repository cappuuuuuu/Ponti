import React from 'react';
import './Header.scss';
import logo from '../../assets/ponti-wine-cellars-logo-1589532960.jpg.png'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <div className="contact">
        <p className="tel">
          <span>TEL </span>
          (852) 2739 7678
        </p>
        <p className="email">
          <span>EMAIL </span>
          enquiries@pontiwinecellars.com
        </p>
      </div>
      <div className="banner">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <ul className="nav">
          <li>SHOP</li>
          <li>PROMOTIONS</li>
          <li>EVENTS</li>
          <li>ABOUTS</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="loginbar">
        <span>Login | Register</span>
        <a href="javascript:;" className="search-btn">
          <SearchIcon />
        </a>
        <a href="javascript:;" className="cart-btn">
          <ShoppingCartOutlinedIcon />
          <span className="cart-quantity">2</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
