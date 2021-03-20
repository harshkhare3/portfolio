import React, { useState }from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';

import './App.scss';
import Sidebar from './Sidebar/Sidebar';
import HeroSection from './HeroSection/HeroSection';
import Bio from './Bio/Bio';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Router>
      <div id="home">
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Header toggle={toggle}/>
        <HeroSection />
        <Bio />
      </div>
    </Router>
  )
}

export default App