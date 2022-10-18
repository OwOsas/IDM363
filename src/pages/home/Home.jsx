import React from 'react';
import { ItemCard } from '../../components';
import './Home.css';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Home() {
  return (
    <div className='Home'>
      Home
      <ItemCard></ItemCard>
    </div>
  );
}

export default Home;
