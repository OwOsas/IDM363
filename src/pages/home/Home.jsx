import React from 'react';
import { CardContainer } from '../../components';
import './Home.css';
import { db } from '../../firebase/firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import test from '../../img/test-img.png';

function Home() {
  const [inventory, setInventory] = useState([]);

  function getInventory() {
    const inventoryRef = collection(db, 'inventory');
    const itemArray = [];
    onSnapshot(
      inventoryRef,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // setInventory([...inventory, doc.data()]);
          itemArray.push({ ...doc.data(), uid: doc.id });
        });
        setInventory(itemArray);
      },
      []
    );
  }

  console.log(inventory);

  useEffect(() => {
    getInventory();
  }, []);
  return (
    <div className='Home'>
      <CardContainer inventory={inventory}></CardContainer>
    </div>
  );
}

export default Home;
