import { Header, Footer } from './components';
import './index.css';
import logo from './img/test-img.png';
import { Home, Cart, CreateListing, Detail } from './pages';
import { Route, Routes } from 'react-router-dom';

import { db } from './firebase/firebase-config';
import { getDocs, collection, query, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className='App'>
      <Header logo={logo} />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/LogIn' element={<CreateListing />} />
          <Route path='/Detail/:uid' element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
