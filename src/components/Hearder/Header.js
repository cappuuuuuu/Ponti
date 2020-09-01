import React , { useEffect  ,useState } from 'react';
import './Header.scss';
import logo from '../../assets/image/ponti-wine-cellars-logo-1589532960.jpg.png'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';



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
    <div className={`header ${headerStatus}`}>
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
            <label for="shop">SHOP</label>
          </li>
          <li data-text="PROMOTIONS">
            <input type="radio" name="navigation" id="promotions"/> 
            <label for="promotions">PROMOTIONS</label>
          </li>
          <li data-text="EVENTS">
            <input type="radio" name="navigation" id="events"/> 
            <label for="events">EVENTS</label>
          </li>
          <li data-text="ABOUTS">
            <input type="radio" name="navigation" id="abouts"/> 
            <label for="abouts">ABOUTS</label>
          </li>
          <li data-text="CONTACT">
            <input type="radio" name="navigation" id="contact"/> 
            <label for="contact">CONTACT</label>
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
  );
}

export default Header;
