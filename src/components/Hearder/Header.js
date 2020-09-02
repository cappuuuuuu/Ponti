import React , { useEffect  ,useState } from 'react';
import './Header.scss';
import logo from '../../assets/image/ponti-wine-cellars-logo-1589532960.jpg.png'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import MobileNav from './MobileNav'

function Header() {
  const [ headerStatus , setHeaderStatus ]  = useState('')

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
  },[])

  function handleScroll(){
    if (window.scrollY === 0 ){
      setHeaderStatus('')
    } else {
      setHeaderStatus('no-top')
    }
  }

  return (
    <React.Fragment>
      <MobileNav />
      <div className={`desktop-header ${headerStatus}`}>
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
            <li data-text="SHOP">
              <input type="radio" name="navigation" id="shop"/> 
              <label htmlFor="shop">SHOP</label>
            </li>
            <li data-text="PROMOTIONS">
              <input type="radio" name="navigation" id="promotions"/> 
              <label htmlFor="promotions">PROMOTIONS</label>
            </li>
            <li data-text="EVENTS">
              <input type="radio" name="navigation" id="events"/> 
              <label htmlFor="events">EVENTS</label>
            </li>
            <li data-text="ABOUTS">
              <input type="radio" name="navigation" id="abouts"/> 
              <label htmlFor="abouts">ABOUTS</label>
            </li>
            <li data-text="CONTACT">
              <input type="radio" name="navigation" id="contact"/> 
              <label htmlFor="contact">CONTACT</label>
            </li>
            {/* <li><a href="#promotions">PROMOTIONS</a>
            </li>
            <li>EVENTS</li>
            <li>ABOUTS</li>
            <li>CONTACT</li> */}
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
    </React.Fragment>
    
  )
}

export default Header;
