import React from 'react';
import './Slider.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import slider1 from '../../assets/image/slider-1.png'
import slider2 from '../../assets/image/slider-2.png'
import slider3 from '../../assets/image/slider-3.png'

function CarouselList(){

  let list = []

  for(let i = 1 ; i < 4 ; i++) {
    list.push(
      <Carousel.Item key={i}>
        <img
          className="d-block w-100"
          src={require(`../../assets/image/slider-${i}.png`)}
          alt={`slider-${i}`}
        />
        <Carousel.Caption>
          <h3>Trusted wine delivery</h3>
          <p>with temperature controlled wine delivery truck</p>
          <button>SEE MORE</button>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }

  return (
    <Carousel indicators={false} >
      {list}
    </Carousel>
  )
}

function Slider() {
  return (
    <div className="slider-container">
      <CarouselList />
    </div>
  );
}

export default Slider;
