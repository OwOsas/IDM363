import React from 'react';
import { ItemCard, CustomCarousel } from '../../components';
import './Home.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import test from '../../img/test-img.png';

function Home() {
  return (
    <div className='Home'>
      Home
      <div className='cardContainer'>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
      </div>
      {/* <CustomCarousel></CustomCarousel> */}
    </div>
  );
}

export default Home;
