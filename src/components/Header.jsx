import React from 'react'
import Nav from './Nav';
import {BrowserRouter} from 'react-router-dom/BrowserRouter';

const Header = () => {
  return (
    <header className='grid-container header'>
      <img src="logo.svg" alt="Logo" className='logo' />
      <Nav />
    </header>
  );
}

export default Header