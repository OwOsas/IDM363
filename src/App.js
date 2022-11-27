import { Header, Footer } from './components';
import './index.css';
import logo from './img/logo.png';
import { Home, Cart, CreateListing, Detail } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header logo={logo} />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Listing/:uid' element={<CreateListing />} />
          <Route path='/Detail/:uid' element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
