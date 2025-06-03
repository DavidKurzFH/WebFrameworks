import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HousingList from './components/HousingList'
import HousingAdd from './components/HousingAdd'
import HousingDetail from './components/HousingDetail'

function App() {
  return (
    <Router>
      <nav style={{padding: '10px', background:'gray'}}>
        <Link to="/"><button className='btn'>to Overview</button></Link>
        <Link to="/add"><button className='btn'>add new Location</button></Link>
      </nav>
      <Routes>
        <Route path="/" element={<HousingList/>}/>
        <Route path="/add" element={<HousingAdd/>}/>
        <Route path="/details/:id" element={<HousingDetail/>}/>
      </Routes>
    </Router>
  );
};

export default App;
