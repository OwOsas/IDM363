import React from 'react';
import './cardContainer.css';
import { ItemCard } from '../index';

//Generate a grid container will all of the cards based on a list of items
function CardContainer({ inventory }) {
  return (
    <div className='cardContainer'>
      {inventory.map((item, index) => {
        return (
          <ItemCard
            key={index}
            uid={item.uid}
            itemName={item.itemName}
            itemImage={item.imgURL}
            price={item.price}
          ></ItemCard>
        );
      })}
    </div>
  );
}
export default CardContainer;
