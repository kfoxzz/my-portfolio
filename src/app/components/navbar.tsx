'use client';

import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const dropdown = useRef(null);
  const closeIcon = useRef(null);

  const onToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClick = (event: MouseEvent) => {
      if (
        dropdown.current &&
        !(dropdown.current as HTMLElement).contains(event.target as HTMLElement) &&
        closeIcon.current &&
        !(closeIcon.current as HTMLElement).contains(event.target as HTMLElement)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setScrolledToTop(false);
      } else {
        setScrolledToTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='fixed p-4 flex justify-end w-full z-10'>
      <button
        className={`w-10 h-10 relative focus:outline-none z-50 ${scrolledToTop ? '' : 'bg-black/[0.95]'}`}
        onClick={onToggleMobileMenu}
        ref={closeIcon}
      >
        <span className='sr-only'>Open menu</span>
        <div className='block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <span
            aria-hidden='true'
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              isMobileMenuOpen ? 'rotate-45' : ' -translate-y-1.5'
            }`}
          ></span>

          <span
            aria-hidden='true'
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              isMobileMenuOpen && 'opacity-0'
            }`}
          ></span>

          <span
            aria-hidden='true'
            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
              isMobileMenuOpen ? '-rotate-45' : ' translate-y-1.5'
            }`}
          ></span>
        </div>
      </button>

      <ul
        onClick={onToggleMobileMenu}
        ref={dropdown}
        className={`absolute left-0 top-0 p-8 py-16 w-full bg-black/[0.95] flex flex-col gap-3 items-center 
        origin-top animate-open-menu ${!isMobileMenuOpen ? 'hidden' : ''}`}
      >
        <li className='border-solid border-violet-500 border-b pb-px transition ease-in-out delay-50  hover:scale-110'>
          <a href='#about-me'>About me</a>
        </li>
        <li className='border-solid border-violet-500 border-b pb-px transition ease-in-out delay-50  hover:scale-110'>
          <a href='#resume'>Resume</a>
        </li>
        <li className='border-solid border-violet-500 border-b pb-px transition ease-in-out delay-50  hover:scale-110'>
          <a href='#projects'>Projects</a>
        </li>
        <li className='border-solid border-violet-500 border-b pb-px transition ease-in-out delay-50  hover:scale-110'>
          <a href='#contact-me'>Contact me</a>
        </li>
      </ul>
    </nav>
  );
}
