import { doc, addDoc, collection, Timestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebase-config';
import PropTypes from 'prop-types';

function CreateListing() {
  
  return (
    <div>
      <input type='text' />
      <button onClick={() => pushListing('Testing 002', 22.22, 10)}>
        {' '}
        push{' '}
      </button>
    </div>
  );
}

export default CreateListing;

async function pushListing(itemName, price, quantity) {
  const time = Timestamp.fromMillis(Date.now());
  await addDoc(collection(db, 'inventory'), {
    itemName: itemName,
    price: price,
    quantity: quantity,
    createdAt: Timestamp.fromMillis(Date.now()),
  });
}
pushListing.propTypes = {
  itemName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
