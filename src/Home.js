import React from 'react';
import './reset.css';
import Header from './components/Hearder/Header'
import Slider from './components/Slider/Slider'
import Widget from './components/Widget/Widget'

function Home() {
  return (
    <div className="home">
      <Header />
      <Slider />
      <Widget />
    </div>
  );
}

export default Home;
