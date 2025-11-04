import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ margin: 0, padding: 0, width: '100%', overflowX: 'hidden' }}>
        {/* Purple navigation bar */}
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/restaurants">Restaurants</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Routing of pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
