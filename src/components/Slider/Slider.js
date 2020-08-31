import React from 'react';
import './Slider.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import slider1 from '../../assets/slider-1.png'
import slider2 from '../../assets/slider-2.png'
import slider3 from '../../assets/slider-3.png'

function Slider() {
  return (
    <div className="slider-container">
      <Carousel indicators={false} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Trusted wine delivery</h3>
            <p>with temperature controlled wine delivery truck</p>
            <button>SEE MORE</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Trusted wine delivery</h3>
            <p>with temperature controlled wine delivery truck</p>
            <button>SEE MORE</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Trusted wine delivery</h3>
            <p>with temperature controlled wine delivery truck</p>
            <button>SEE MORE</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
