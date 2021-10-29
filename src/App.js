import logo from './logo.svg';
import React from 'react';
import Home from './pages/Home';
import Porto from './pages/porto';
import Navbar from './Component/Navigasi/Navbar';
import './App.css';
import Waepon from './pages/Waepon';
import PetaGenshin from './pages/PetaGenshin';

function App() {

  
  return (
    <>
      <Navbar/>
      <Home name="Home"/>
      <Porto name="Porto"/>
      <Waepon />
      <PetaGenshin/>
    </>
  );
}

export default App;
