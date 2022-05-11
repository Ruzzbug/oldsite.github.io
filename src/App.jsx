// GET SITEMAP SORTED, potential option at https://www.npmjs.com/package/react-router-sitemap-generator
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Timeline from './components/Timeline/Timeline';
import palette from './palette';


import {
  HashRouter as Router, //Might die depending on where it's hosted. Try BrowserRouter instead of Hashrouter
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (  
  <Router>
    <Navbar/>
    <div className='main'></div>
    <Routes>
      <Route path="#/Home" element={<Home />} />
      <Route path="#/About" element={<About />} />
      <Route path="#/Portfolio" element={<Portfolio />} />
      <Route path="#/Resume" element={<Resume />} />
      <Route path="#/Timeline" element={<Timeline />} />
    </Routes>
  </Router>
  );
}

export default App;


  