import { db } from '../../firebase/firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function QueryInventory() {
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
  return <div></div>;
}

export default QueryInventory;
