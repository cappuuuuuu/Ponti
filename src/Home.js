import React from 'react';
import Header from './components/Hearder/Header'
import Slider from './components/Slider/Slider'
import Widget from './components/Widget/Widget'
import Footer from './components/Footer/Footer'
import Product from './components/Product/Product'

function Home() {
  return (
    <div className="home">
      <Header />
      <Slider />
      <div className="restrict-width-container">
        <Widget />
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
