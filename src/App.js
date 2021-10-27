import logo from './logo.svg';
import React from 'react';
import Home from './pages/Home';
import Porto from './pages/porto';
import Navbar from './Component/Navigasi/Navbar';
import './App.css';
import Waepon from './pages/Waepon';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {

  
  return (
    <>
      <Navbar/>
      <Home/>
      <Porto/>
      <Waepon/>
    </>
  );
}

export default App;
