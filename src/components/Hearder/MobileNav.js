import React , { useState , useEffect , useRef } from 'react'
import Cart from '../Cart/Cart'
import CloseIcon from '@material-ui/icons/Close';
import './MobileNav.scss'


function MobileNav () {
    const [ menuStatus , setMenuStatus ] = useState(false)
    const navButtonEl = useRef(null);
    const menuEl = useRef(null);

    function toggleMenu(){
        setMenuStatus(!menuStatus)
    }

    useEffect(()=>{
        window.addEventListener('click',(e)=>{
            if(navButtonEl.current.contains(e.target)){
                setMenuStatus((menuStatus)=>!menuStatus)
                return 
            }

            if( !(menuEl.current === e.target) && !(menuEl.current.contains(e.target))){
                setMenuStatus(false)
            }
        })
    },[])

    return (
        <div className="mobile-nav">
            <div ref={navButtonEl} className="nav-btn">
                <button>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div ref={menuEl} className={`mobile-menu ${menuStatus?'active':''}`}>
                <ul>
                    <li>LOG IN / REGISTER</li>
                    <li>SHOP</li>
                    <li>PROMOTION</li>
                    <li>EVENTS</li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                </ul>
                <div className="separate-line"></div>
                <ul>
                    <li>PRIVACY & POLICY</li>
                    <li>TERMS OF USE</li>
                    <li>COOKIES POLICY</li>
                    <li>FAQ</li>
                    <li>SEARCH</li>
                </ul>
                <div className="btn" onClick={ toggleMenu }>
                    <CloseIcon className="close-btn"/>
                </div>
            </div>
            <div className="logo">
                <img src={require('../../assets/image/ponti_wine_cellars-logo BLACK.png')} alt="logo"/>
            </div>
            <Cart />
            <div className="shipping-info">
                Free shipping for over $1,000
            </div>
        </div>
    )
}

export default MobileNav