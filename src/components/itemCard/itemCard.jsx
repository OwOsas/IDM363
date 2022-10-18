import React from 'react';
import './itemCard.css';
import test from '../../img/test-img.png';
import arrow from '../../img/icon/arrow.svg';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

function itemCard() {
  return (
    <div className='Card'>
      <div className='itemCard'>
        <div className='itemImageContainer'>
          <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
            <div>
              <img src={test} alt='' />
            </div>

            <div>
              <img src={test} alt='' />
            </div>
          </Carousel>
        </div>

        <button className='itemName'>
          A Very Expensive Item on a 25% Discount But This is Just a Test...
        </button>
        <div className='prices'>
          <span className='currentPriceContainer'>
            <span className='currentPrice'>$99</span>
            <span className='priceDigit'>90</span>
          </span>
          <span className='originalPrice'>
            <span className='currentPrice'>$888</span>
            <span className='priceDigit'>90</span>
          </span>
          <span>|</span>
          <span className='discount'>50% Off</span>
        </div>
        <button className='buttonStyle addToCart'>Add to Cart</button>
      </div>
    </div>
  );
}

export default itemCard;
