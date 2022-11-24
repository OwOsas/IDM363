import React from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';
import { db } from '../../firebase/firebase-config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function Detail() {
  const { uid } = useParams();
  const [page, setPage] = useState({});

  function getItem(uid) {
    const itemRef = doc(db, 'inventory', uid);
    onSnapshot(itemRef, (doc) => {
      setPage({ ...doc.data(), uid: doc.id });
    });
  }

  console.log(page);

  useEffect(() => getItem(uid), []);

  return (
    <>
      <div className='itemImg'></div>
      <h1 className='itemName'>{page.itemName}</h1>
      <h2 className='itemPrice'>{page.price}</h2>
    </>
  );
}

export default Detail;
