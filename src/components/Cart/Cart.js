import React , { useEffect  ,useState } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import './Cart.scss'

function Cart (){
    return (
        <div className="cart-btn">
            <ShoppingCartOutlinedIcon className="cart-icon"/>
            <span className="cart-quantity">2</span>
        </div>
    )
}

export default Cart 
