import React , { useState, useEffect }from 'react';
import SwiperCore, {  Virtual , Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import FavoriteIcon from '@material-ui/icons/Favorite';

import './Product.scss'
import products from '../../assets/json/product.json'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([ Virtual,Navigation, Pagination, Scrollbar, A11y]);

function ProductList ({ category }) {

  const [isMobile , setMobile] = useState(null)

  useEffect(()=>{

    if (window.innerWidth <= 576) {
      setMobile(true)
    } else {
      setMobile(false)
    }

    window.addEventListener('resize',()=>{
      if (window.innerWidth <= 576) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    })
  },[])

  return (
    <Swiper
      navigation 
      spaceBetween={ 10 }
      slidesPerView={ isMobile ? 1 : 4}
    >
    {
      products.map((product,index) => {
        if( product.category !== category ) return 
        return (
          <SwiperSlide key={index}>
            <div className="product-item">
              <div className="product-info">
                <div className="product-description">
                  <div className="product-name">
                    { product.name }
                  </div>
                  <div className="product-rate">
                    <ul>
                      {
                        product.rate.map((rate)=>{
                          return (
                            <li key={rate.grade}>
                              <div className="kind">{ rate.kind }</div>
                              <div className="rate">{ rate.grade }</div>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                    <div className="product-details-mobile">
                        <div className="category">
                          <p>Vintage:</p>
                          <p>country:</p>
                          <p>region:</p>
                          <p>Size:</p>
                        </div>
                        <div className="info">
                          <p>{ product.vintage }</p>
                          <p>{ product.country }</p>
                          <p>{ product.region }</p>
                          <p>{ product.size }</p>
                        </div>
                    </div>
                    <div className="stock-status">{ product.stock ? '' : 'OUT OF STOCK' }</div>
                    <div className="product-price">HK${ product.price }</div>

                  </div>
                  <div className="product-img">
                    <img src={require(`../../assets/image/${ product.imgUrl }`)} alt=""/>
                  </div>
                
                  <div className="product-details">
                    <div className="details">
                      <div className="vintage">
                      Vintage : <span>{ product.vintage }</span>
                      </div>
                      <div className="country">
                        country : <span>{ product.country }</span>
                      </div>
                      <div className="region">
                        &nbsp; region : <span>{ product.region }</span>
                      </div>
                      <div className="size">
                        &nbsp; &nbsp; &nbsp;  Size : <span>{ product.size }</span>
                      </div>
                    </div>
                    <span className="line horizontal top"></span>
                    <span className="line horizontal bottom"></span>
                    <span className="line vertical left"></span>
                    <span className="line vertical right"></span>
                  </div>
                  <div className="product-like">
                    <FavoriteIcon className="product-like-icon"/>
                  </div>
                </div>
                <div className={`product-cart ${ product.stock ? '' : 'disabled'}`} >
                  <div className="input-cart-wrapper">
                    <button className="decrease">-</button>
                    <input type="text" className="input-cart" placeholder={product.stock?'1':'0'}/>
                    <button className="increase">+</button>
                  </div>
                  <div>
                  <button className="add-cart-btn" disabled={ !product.stock }>Add to cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })
    }
    </Swiper>
  )
}

function Product () {
  return (
    <React.Fragment>
      <div className="product">
        <div className="title">
          Ponti's top picks
        </div>
        <ProductList category="TopPicks"/>
      </div>
      <div className="product">
        <div className="title">
          New Arrivial...
        </div>
        <ProductList category="NewArrival"/>
      </div>
    </React.Fragment>
  );
};

export default Product ;