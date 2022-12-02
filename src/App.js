import { Header, Footer } from './components';
import style from './index.css';
import logo from './img/logo.png';
import { Home, Cart, CreateListing, Detail } from './pages';
import { Route, Routes } from 'react-router-dom';
import { db } from './firebase/firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function App() {
  const [inventory, setInventory] = useState([]);

  //get inventory from firestore
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
  return (
    <div className='App'>
      <Header logo={logo} />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home inventory={inventory} />} />
          <Route path='/Cart' element={<Cart inventory={inventory} />} />
          <Route path='/Listing/:uid' element={<CreateListing />} />
          <Route path='/Detail/:uid' element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
