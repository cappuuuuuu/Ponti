import React from 'react';
import './reset.css';
import Header from './components/Hearder/Header'
import Slider from './components/Slider/Slider'
import Widget from './components/Widget/Widget'
import Footer from './components/Footer/Footer'

function Home() {
  return (
    <div className="home">
      <Header />
      <Slider />
      <Widget />
      <Footer />
    </div>
  );
}

export default Home;
