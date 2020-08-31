import React from 'react';
import './reset.css';
import Header from './components/Hearder/Header'
import Slider from './components/Slider/Slider'

function Home() {
  return (
    <div className="home">
      <Header />
      <Slider />
    </div>
  );
}

export default Home;
