import React from 'react';
import './cardContainer.css';
import PropType from 'prop-types';
import { ItemCard } from '../index';
import { test_img } from '../../img';
import { db } from '../../firebase/firebase-config';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

function CardContainer() {
  const [inventory, setInventory] = useState([]);

  function getInventory() {
    const inventoryRef = collection(db, 'inventory');
    const itemArray = [];
    onSnapshot(inventoryRef, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // setInventory([...inventory, doc.data()]);
        itemArray.push({ ...doc.data(), uid: doc.id });
      });
      setInventory(itemArray);
    });
  }

  function consoleLog() {
    console.log(inventory);
  }

  useEffect(() => {
    getInventory();
  });

  return (
    <div className='cardContainer'>
      {inventory.map((item, index) => {
        return (
          <ItemCard
            key={index}
            uid={item.uid}
            itemName={item.itemName}
            itemImage={test_img}
            price={item.price}
          ></ItemCard>
        );
      })}

      {/* <ItemCard
        uid={0}
        itemName='Long Long Long Long Name Long Long Long Long Name Long Long Long Long Name'
        itemImage={test_img}
        price='99.90'
      ></ItemCard>
      <ItemCard
        uid={0}
        itemName='Long Long Long Long Name Long Long Long Long Name Long Long Long Long Name'
        itemImage={test_img}
        price='99.90'
      ></ItemCard>
      <ItemCard
        uid={1}
        itemName='Long Long Long Long Name'
        itemImage={test_img}
        price='99.90'
      ></ItemCard>
      <ItemCard
        itemName='Long Long Long Long Name'
        itemImage={test_img}
        price='99.90'
      ></ItemCard>
      <ItemCard
        uid={2}
        itemName='Long Long Long Long Name'
        itemImage={test_img}
        price='99.90'
      ></ItemCard> */}
    </div>
  );
}
export default CardContainer;
