import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Writings from './components/Writings';
import Work from './components/Work';
import Gallery from './components/Gallery';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css'
function App() {
  return (
    <Router>
      <Navbar />
        <div className = {styles.body}>
          <Routes>
            <Route path="/" exact element={<About/>} />
            <Route path="/writings" element={<Writings/>} />
            <Route path="/work" element={<Work/>} />
            <Route path="/gallery" element={<Gallery/>} />
          </Routes>
        </div>
      </Router>
      
  );
}

export default App;
