import React, { useState } from 'react';
import './customCarousel.css';
import { Carousel } from 'react-responsive-carousel';
import testImg from '../../img/test-img.png';

const CustomCarousel = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
      <img src={testImg} alt='' />
      <img src={testImg} alt='' />
      <img src={testImg} alt='' />
    </Carousel>
  );
};

export default CustomCarousel;
