import React from 'react';
import { ItemCard, CustomCarousel } from '../../components';
import './Home.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import test from '../../img/test-img.png';

function Home() {
  return (
    <div className='Home'>
      <div className='cardContainer'>
        <ItemCard
          itemName='Name'
          itemImages={[test, test]}
          originalPrice='99.90'
          discount='50'
        ></ItemCard>
        <ItemCard
          itemName='Name'
          itemImages={[test, test]}
          originalPrice='99.90'
          discount='50'
        ></ItemCard>
        <ItemCard
          itemName='Name'
          itemImages={[test, test]}
          originalPrice='99.90'
          discount='50'
        ></ItemCard>
        <ItemCard
          itemName='Name'
          itemImages={[test, test]}
          originalPrice='99.90'
          discount='50'
        ></ItemCard>
      </div>
    </div>
  );
}

export default Home;
