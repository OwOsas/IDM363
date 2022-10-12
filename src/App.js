import { Header } from './components';
import AppCSS from './index.css';
import { Home } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header logo />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
