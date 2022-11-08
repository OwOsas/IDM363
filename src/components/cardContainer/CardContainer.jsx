import React from 'react';
import './cardContainer.css';
import PropType from 'prop-types';
import { ItemCard } from '../index';
import test from '../../img/test-img.png';

function CardContainer() {
  return (
    <div className='cardContainer'>
      <ItemCard
        uid={0}
        itemName='Long Long Long Long Name Long Long Long Long Name Long Long Long Long Name'
        itemImages={test}
        price='99.90'
      ></ItemCard>
      <ItemCard
        uid={0}
        itemName='Long Long Long Long Name Long Long Long Long Name Long Long Long Long Name'
        itemImages={[test, test]}
        price='99.90'
      ></ItemCard>
      <ItemCard
        uid={1}
        itemName='Long Long Long Long Name'
        itemImages={[test, test]}
        price='99.90'
      ></ItemCard>
      <ItemCard
        itemName='Long Long Long Long Name'
        itemImages={[test, test]}
        price='99.90'
      ></ItemCard>
      <ItemCard
        uid={2}
        itemName='Long Long Long Long Name'
        itemImages={[test, test]}
        price='99.90'
      ></ItemCard>
    </div>
  );
}
export default CardContainer;
