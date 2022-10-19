import { Header } from './components';
import './index.css';
import logo from './img/test-img.png';
import { Home } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header logo={logo} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
