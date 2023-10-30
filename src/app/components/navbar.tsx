'use client';

import { useState, useEffect, useRef, useContext, type MouseEvent } from 'react';
import { ModalContext } from '../context/modalContext';
import useWindowResolution from '../hooks/useWindowResolution';

export default function Navbar() {
  const { isMobileWidth } = useWindowResolution();
  const { open, setOpen } = useContext(ModalContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const dropdown = useRef(null);
  const closeIcon = useRef(null);

  const onToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const onToggleContactForm = (ev: MouseEvent) => {
    ev.stopPropagation();
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    setOpen(!open);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    // NOTE: We must prepend "globalThis" to MouseEvent because we are importing MouseEvent from react, but we want to use the global MouseEvent type from the DOM API
    const handleClick = (event: globalThis.MouseEvent) => {
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
    <nav className={`fixed p-4 flex justify-end w-full z-10 ${open ? 'lg:z-0' : 'lg:z-[101]'}`}>
      {isMobileWidth ? (
        <>
          <button
            className={`w-10 h-10 relative focus:outline-none z-50 ${
              scrolledToTop ? '' : 'bg-zinc-950/[0.95]'
            }`}
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
            className={`absolute left-0 top-0 p-8 py-16 w-full bg-zinc-950/[0.95] flex flex-col gap-3 items-center 
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
              <button onClick={onToggleContactForm}>Contact me</button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul
            className={`absolute left-0 top-0 w-full py-6 px-8 flex gap-8 items-center justify-end lg:justify-start lg:text-lg xl:text-xl ${
              scrolledToTop ? '' : 'bg-zinc-950/[0.85]'
            }`}
          >
            <li className='border-solid border-violet-500 border-b transition ease-in-out delay-50 duration-500 hover:scale-110'>
              <a href='#about-me'>About me</a>
            </li>
            <li className='border-solid border-violet-500 border-b  transition ease-in-out delay-50 duration-500 hover:scale-110'>
              <a href='#resume'>Resume</a>
            </li>
            <li className='border-solid border-violet-500 border-b transition ease-in-out delay-50 duration-500 hover:scale-110'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='border-solid border-violet-500 border-b  transition ease-in-out delay-50 duration-500 hover:scale-110'>
              <button onClick={onToggleContactForm}>Contact me</button>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}
