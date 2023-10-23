'use client';

import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='fixed p-4 flex justify-end w-full'>
      <button className='w-10 h-10 relative focus:outline-none z-50' onClick={onToggleMobileMenu}>
        <span className='sr-only'>Open menu</span>
        <div className='block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2'>
          <span
            aria-hidden='true'
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              isMobileMenuOpen ? 'rotate-45' : ' -translate-y-1.5'
            }`}
          ></span>

          <span
            aria-hidden='true'
            className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
              isMobileMenuOpen && 'opacity-0'
            }`}
          ></span>

          <span
            aria-hidden='true'
            className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
              isMobileMenuOpen ? '-rotate-45' : ' translate-y-1.5'
            }`}
          ></span>
        </div>
      </button>

      <ul
        className={`absolute left-0 top-0 p-8 py-16 w-full bg-black/[0.75] flex flex-col gap-3 items-center 
        origin-top animate-open-menu ${!isMobileMenuOpen ? 'hidden' : ''}`}
      >
        <li className='border-solid border-violet-500 border-b pb-px transition ease-in-out delay-50  hover:scale-110'>
          About me
        </li>
        <li className='border-solid border-violet-500 border-b pb-px transition ease-in-out delay-50  hover:scale-110'>
          Resume
        </li>
        <li className='border-solid border-violet-500 border-b pb-px transition ease-in-out delay-50  hover:scale-110'>
          Projects
        </li>
        <li className='border-solid border-violet-500 border-b pb-px transition ease-in-out delay-50  hover:scale-110'>
          Contact me
        </li>
      </ul>

      {/* navbar should be fixed, if top is more than 0 (ie: user has scrolled) bg should be opaque black */}
    </nav>
  );
};

export default Navbar;
