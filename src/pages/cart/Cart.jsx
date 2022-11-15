import React from 'react';
import './Cart.css';
import CustomCarousel from '../../components/customCarousel/CustomCarousel';
import { db } from '../../firebase/firebase-config';
import { where, collection, query, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

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

  console.log(cart);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default Cart;
