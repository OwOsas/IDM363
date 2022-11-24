import React from 'react';
import { CardContainer } from '../../components';
import './Home.css';
import { db } from '../../firebase/firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function Home() {
  document.title = 'Home';
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

  useEffect(() => {
    getInventory();
  }, []);

  console.log(inventory);

  return (
    <div className='Home'>
      <CardContainer inventory={inventory}></CardContainer>
    </div>
  );
}

export default Home;
