import React from 'react'
import Nav from './Nav';

const Header = () => {
  return (
    <header className='header'>
      <img src="logo.svg" alt="Logo" className='logo' />
      <Nav />
    </header>
  );
}

export default Header