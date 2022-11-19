import React from 'react';
import './itemCard.css';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { test_img } from '../../img';
import { plus, subtract, trash } from '../../img/icons';
import {
  removeItem,
  increaseCount,
  decreaseCount,
} from '../../redux/cartSlice';

function ItemCard({ item, quantity, price }) {
  const dispatch = useDispatch();

  return (
    <div className='cartItem'>
      <div className='imgContainer'>
        <div
          className='itemImg'
          style={{ backgroundImage: 'url(' + test_img + ')' }}
        ></div>
      </div>

      <div className='itemDetail'>
        <div className='itemName'>{item.itemName}</div>
        <div className='itemUnitPrice'>${item.price}/ea.</div>
      </div>
      <div className='itemTotal'>
        <div className='itemCount'>
          <button
            onClick={() => dispatch(decreaseCount(item.uid))}
            className='countBtn subtractItem'
          >
            <img src={subtract} alt='' />
          </button>
          <div>
            {cartItems.find((e) => e.uid === item.uid)
              ? cartItems.find((e) => e.uid === item.uid).quantity
              : ''}
          </div>
          <button
            onClick={() => dispatch(increaseCount(item.uid))}
            className='countBtn addItem'
          >
            <img src={plus} alt='' />
          </button>
        </div>
        <div className='itemTotalPrice'>
          $
          {cartItems.find((e) => e.uid === item.uid)
            ? (
                item.price * cartItems.find((e) => e.uid === item.uid).quantity
              ).toFixed(2)
            : ''}
        </div>
      </div>

      <button onClick={() => dispatch(removeItem(item.uid))} className='remove'>
        <img src={trash} alt='' />
      </button>
    </div>
  );
}
export default ItemCard;

ItemCard.PropType = {
  itemImages: PropType.string,
  itemName: PropType.string.isRequired,
  price: PropType.number.isRequired,
};

function getNumber(number) {
  number = Number(number);
  number = Math.floor(number);
  return number;
}

function getDigit(number) {
  number = Number(number);
  var digit = Math.floor(number.toFixed(2) * 100) % 100;
  return digit;
}
