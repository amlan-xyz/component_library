import './App.css';

import { Route,Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Layout } from './components/Layout/Layout';
import { Cards } from './pages/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/layout' element={<Layout/>} />
        <Route path='/cards' element={<Cards/>} />
      </Routes>
    </div>
  );
}

export default App;
