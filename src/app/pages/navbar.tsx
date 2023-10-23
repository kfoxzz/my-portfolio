'use client';

import React, { useState } from 'react';
import { AiOutlineMenu as MenuIcon } from 'react-icons/ai';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='fixed p-8 flex justify-end w-full'>
      <button onClick={() => onToggleMobileMenu()} className='pointer-events-auto cursor-pointer'>
        <MenuIcon size={24} />
      </button>

      <ul
        className={`absolute top-20 bg-black/[0.5] transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <li>About me</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Contact me</li>
      </ul>

      {/* navbar should be fixed, after scrolling background should be opaque black */}
    </nav>
  );
};

export default Navbar;
