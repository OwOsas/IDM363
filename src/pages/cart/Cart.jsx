import React from 'react';
import './Cart.css';
import CustomCarousel from '../../components/customCarousel/CustomCarousel';
import { db } from '../../firebase/firebase-config';
import { getDocs, collection, query, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function Cart() {
  return (
    <div>
      <div></div>
    </div>
  );
}

export default Cart;
