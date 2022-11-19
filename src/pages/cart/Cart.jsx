import React from 'react';
import './Cart.css';
import { db } from '../../firebase/firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { test_img } from '../../img';
import { plus, subtract, trash } from '../../img/icons';
import {
  removeItem,
  increaseCount,
  decreaseCount,
} from '../../redux/cartSlice';

function Cart() {
  const [cart, setCart] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  var cartItemQuantity = 0;
  var cartItemTotal = 0;
  var cartRender;

  // console.log(cartArray);

  function getCart() {
    const inventoryRef = collection(db, 'inventory');
    const itemArray = [];
    var reduxItem;
    onSnapshot(
      inventoryRef,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (cartItems.find((item) => item.uid === doc.id)) {
            itemArray.push({
              ...doc.data(),
              uid: doc.id,
            });
          }
        });
        setCart(itemArray);
      },
      []
    );
    cart.map((item) => {
      return (cartItemTotal +=
        cartItems.find((e) => e.uid === item.uid).quantity * item.price);
      // return (cartItemTotal += item.quantity * item.price);
    });
    console.log('ItemArray: ', itemArray);
  }

  const dispatch = useDispatch();

  console.log(cart);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div className='cart'>
        {cart.map((item, index) => {
          return (
            <div className='cartItem' key={index}>
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
                  <div>{item.cartItemQuantity}</div>
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
                        item.price *
                        cartItems.find((e) => e.uid === item.uid).quantity
                      ).toFixed(2)
                    : ''}
                </div>
              </div>

              <button
                onClick={() => {
                  dispatch(removeItem(item.uid));
                  console.log('Cart: ', cart);
                }}
                className='remove'
              >
                <img src={trash} alt='' />
              </button>
            </div>
          );
        })}
      </div>
      <div className='summary'>
        <div className='summaryHeader'>
          <h1>Cart Subtotal </h1>
          <p>
            ({cartItemQuantity} item
            {cartItemQuantity > 1 ? 's' : ''})
          </p>
        </div>
        <div className='priceBreakdown'>
          <div className='subtotal'>
            <span>Subtotal</span>
            <span>${cartItemTotal.toFixed(2)}</span>
          </div>
          <div className='tax'>
            <span>Tax</span>
            <span>Calculated at checkout</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
