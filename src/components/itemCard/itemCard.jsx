import React from 'react';
import './itemCard.css';
import test from '../../img/test-img.png';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

const itemCard = ({ itemImages, itemName, originalPrice, discount }) => {
  var originalPriceDigit = getDigit(originalPrice);
  originalPrice = getNumber(originalPrice);

  var currentPrice = getCurrentPrice(originalPrice, discount);
  var currentPriceDigit = getDigit(currentPrice);
  currentPrice = getNumber(currentPrice);

  itemImages = itemImages.map((img, index) => (
    <div key={index}>
      <img src={img} alt='' />
    </div>
  ));

  return (
    <div className='Card'>
      <div className='itemCard'>
        <Link className='itemImageContainer'>
          <Carousel showThumbs={false} infiniteLoop={true} showStatus={false}>
            {itemImages}
          </Carousel>
        </Link>

        <Link className='itemName'>{itemName}</Link>
        <div className='prices'>
          <span className='currentPriceContainer'>
            <span className='currentPrice'>${currentPrice}</span>
            <span className='priceDigit'>{currentPriceDigit}</span>
          </span>
          <span className='originalPrice'>
            <span className='currentPrice'>${originalPrice}</span>
            <span className='priceDigit'>{originalPriceDigit}</span>
          </span>
          <span>|</span>
          <span className='discount'>{discount}% Off</span>
        </div>
        <button className='buttonStyle addToCart'>Add to Cart</button>
      </div>
    </div>
  );
};

export default itemCard;

function getNumber(number) {
  number = Number(number);
  var digit = Math.floor(number.toFixed(2) * 100) % 100;
  number = number - digit / 100;
  return number;
}

function getDigit(number) {
  number = Number(number);
  var digit = Math.floor(number.toFixed(2) * 100) % 100;
  return digit;
}

function getCurrentPrice(number, discount) {
  discount = 1 - Number(discount) / 100;
  number = number * discount;
  return number;
}
