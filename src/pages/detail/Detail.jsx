import React from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.css';
import { db } from '../../firebase/firebase-config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { addItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { shipping } from '../../img/icons';

//currently not active
function Detail() {
  const { uid } = useParams();
  const [pageItem, setPageItem] = useState({});

  function getItem(uid) {
    const itemRef = doc(db, 'inventory', uid);
    onSnapshot(itemRef, (doc) => {
      setPageItem({ ...doc.data(), uid: doc.id });
    });
  }

  useEffect(() => getItem(uid), []);
  const dispatch = useDispatch();
  console.log('Page: ', pageItem);
  return (
    <>
      <div className='detailContainer'>
        <div
          className='img'
          style={{ backgroundImage: 'url(' + pageItem.imgURL + ')' }}
        ></div>
        <div className='itemInfo'>
          <h1 className='itemName'>{pageItem.itemName}</h1>
          <p className='price'> ${pageItem.price}</p>
          <div className='description'>
            <div className='descriptionTitle'>
              <h3>Product Description</h3>
            </div>

            <p>{pageItem.description}</p>
          </div>
          <div className='shipping'>
            <img src={shipping} alt='' />
            <span>Free Shipping</span>
          </div>
          <button
            onClick={() => {
              dispatch(addItem(uid));
            }}
            className='addToCart'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Detail;
