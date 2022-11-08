import { Header, Footer } from './components';
import './index.css';
import logo from './img/test-img.png';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header logo={logo} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
