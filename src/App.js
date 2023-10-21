import React, { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Cover from './components/Cover';
import Intro from './components/Intro';
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Outro from './components/Outro'

function App() {
      


  return (
      <div className="App">
          <TopBar />

              {<Cover />}

              {<Intro />}

              {<Education />}

              {<Experience />}

              { <Skills /> }

              { <Outro />}

          {/* Add more sections as needed */}
      </div>
  );
}

export default App;
