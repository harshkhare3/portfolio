import React, { useState }from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';

import './App.scss';
import Sidebar from './Sidebar/Sidebar';
import HeroSection from './HeroSection/HeroSection';
import Bio from './Bio/Bio';
import Portfolio from './Portfolio/Portfolio';

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
        <div className="content">
          <Bio />
          <Portfolio />
        </div>
      </div>
    </Router>
  )
}

export default App