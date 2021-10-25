import logo from './logo.svg';
import React from 'react';
import Home from './pages/Home';
import Porto from './pages/porto';
import Navbar from './Component/Navigasi/Navbar';
import './App.css';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {

  
  

  return (
    <>
      <Navbar/>
      <Home/>
      <Porto/>
    </>
  );
}

export default App;
