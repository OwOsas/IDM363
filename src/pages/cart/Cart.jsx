import React from 'react';
import './Cart.css';
import { CardContainer } from '../../components';
import { db } from '../../firebase/firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { test_img } from '../../img';
import { setCount, increaseCount, decreaseCount } from '../../redux/cartSlice';

function Cart() {
  const [cart, setCart] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  const cartArray = [];
  cartItems.map((item) => {
    return cartArray.push(item.uid);
  });

  // console.log(cartArray);

  function getCart() {
    const inventoryRef = collection(db, 'inventory');
    const itemArray = [];
    onSnapshot(
      inventoryRef,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // setInventory([...inventory, doc.data()]);
          if (cartArray.includes(doc.id)) {
            itemArray.push({ ...doc.data(), uid: doc.id });
          }
        });
        setCart(itemArray);
      },
      []
    );
  }

  const dispatch = useDispatch();

  console.log(cart);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className='cart'>
      {cart.map((item, index) => {
        return (
          <div className='cartItem' key={index}>
            <div
              className='itemImg'
              style={{ backgroundImage: 'url(' + test_img + ')' }}
            ></div>
            <div className='itemDetail'>
              <div className='itemName'>{item.itemName}</div>
              <div className='itemUnitPrice'>${item.price}</div>
            </div>
            <div className='itemTotal'>
              <div className='itemCount'>
                <button
                  onClick={() => dispatch(decreaseCount(item.uid))}
                  className='countBtn subtractItem'
                ></button>
                <input
                  value={cartItems.find((e) => e.uid === item.uid)}
                  onChange={(e) =>
                    dispatch(setCount({ uid: item.uid, count: e.target.value }))
                  }
                  type='number'
                />
                <button
                  onClick={() => dispatch(increaseCount(item.uid))}
                  className='countBtn addItem'
                ></button>
              </div>
              <div className='itemTotalPrice'>
                $
                {(
                  item.price *
                  cartItems.find((e) => e.uid === item.uid).quantity
                ).toFixed(2)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
