import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import test from '../../img/test-img.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function customCarousel() {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
      <div>
        <img src={test} alt='' />
      </div>

      <div>
        <img src={test} alt='' />
      </div>
    </Carousel>
  );
}

export default customCarousel;
