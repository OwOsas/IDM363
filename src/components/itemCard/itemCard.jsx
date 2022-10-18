import React from 'react';
import './itemCard.css';
import test from '../../img/test-img.png';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function itemCard() {
  return (
    <div className='itemCard'>
      <div className='itemImageContainer'>
        <img src={test} alt='' />
        <button className=''></button>
      </div>
      <p className='itemName'>
        A Very Expensive Item on a 25% Discount But This is Just a Test...
      </p>
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
        <span className='discount'>20% Off</span>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default itemCard;
