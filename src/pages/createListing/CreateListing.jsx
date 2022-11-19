import { doc, addDoc, collection, Timestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './CreateListing.css';
import { db } from '../../firebase/firebase-config';
import PropTypes from 'prop-types';

function CreateListing() {
  return (
    <div className='container'>
      <div className='preview'></div>
      <div className='dataFill'>
        <label htmlFor=''>Item Name: </label>
        <input className='itemName'></input>
        <label htmlFor=''>Unit Price: </label>
        <input className='unitPrice'></input>
        <label htmlFor=''>Stock Quantity: </label>
        <input className='stock'></input>

        <button onClick={() => pushListing('Testing 002', 22.22, 10)}>
          {' '}
          push{' '}
        </button>
      </div>
    </div>
  );
}

export default CreateListing;

async function pushListing(itemName, price, stock) {
  const time = Timestamp.fromMillis(Date.now());
  await addDoc(collection(db, 'inventory'), {
    itemName: itemName,
    price: price,
    stock: stock,
    createdAt: Timestamp.fromMillis(Date.now()),
  });
}
pushListing.propTypes = {
  itemName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
