import './App.css';
import Sidebar from './components/SideMenu/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Devices from './pages/devices/Devices';

function App() {
  return (
    <Router>
      <div className='mainContainer'>
      <div className='sideMenuDiv'>
      <Sidebar />
      </div>
      <div className='routeDivs'>
      <Routes>      
        <Route path='/home' exact element={<Home/>} />
        <Route path='/devices' exact element={<Devices/>} />          
      </Routes>
      </div>
      </div>
    </Router>

  );
}

export default App;
