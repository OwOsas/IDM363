import React from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';
import { db } from '../../firebase/firebase-config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

//currently not active
function Detail() {
  const { uid } = useParams();
  const [page, setPage] = useState({});

  function getItem(uid) {
    const itemRef = doc(db, 'inventory', uid);
    onSnapshot(itemRef, (doc) => {
      setPage({ ...doc.data(), uid: doc.id });
    });
  }

  useEffect(() => getItem(uid), []);
  console.log('Page: ', page);
  return (
    <div className='container'>
      {/* <div className='img' style={{ backgroundImage: "url(" + page.imgURL,")" }}></div> */}
    </div>
  );
}

export default Detail;
