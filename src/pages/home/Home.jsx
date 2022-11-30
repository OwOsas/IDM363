import React from 'react';
import { CardContainer } from '../../components';
import './Home.css';


function Home({ inventory }) {
  document.title = 'Home';

  console.log(inventory);

  return (
    <div className='Home'>
      <CardContainer inventory={inventory}></CardContainer>
    </div>
  );
}

export default Home;
