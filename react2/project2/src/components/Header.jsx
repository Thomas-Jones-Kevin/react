import React from 'react';
import GlobeLogo from '../assets/globe.png'

export default function Header() {
  return (
    <header className='header'>
      <img src={GlobeLogo} alt="Globe Logo" className='logo' />
      <h2>My travel Journal</h2>
    </header>
  );
}