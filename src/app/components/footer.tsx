'use client';

import { useContext, type MouseEvent } from 'react';
import { ModalContext } from '../context/modalContext';
import { FaGithubSquare as GithubIcon, FaLinkedin as LinkedInIcon } from 'react-icons/fa';

export default function Footer() {
  const { open, setOpen } = useContext(ModalContext);

  const toggleContactModal = (ev: MouseEvent) => {
    ev.stopPropagation();
    setOpen(!open);
  };

  return (
    <footer className='flex flex-col items-center gap-4 py-10 md:flex-row md:justify-evenly md:gap-0 md:items-start lg:w-1/2 lg:justify-start lg:pl-12 lg:fixed lg:bottom-0'>
      <ul className='text-zinc-500 text-sm text-center flex flex-col gap-2 md:order-2 md:text-start lg:hidden'>
        <li>
          <a href='#about-me'>About me</a>
        </li>
        <li>
          <a href='#resume'>Resume</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <button onClick={toggleContactModal}>Contact me</button>
        </li>
      </ul>
      <div className='flex flex-col gap-6 items-center md:order-1 md:items-start'>
        <a
          className='text-violet-500 border-b border-violet-500 transition ease-in-out delay-50 duration-300 hover:scale-110'
          href='mailto:me@kristizentner.com'
          target='_blank'
        >
          me@kristizentner.com
        </a>
        <ul className='text-zinc-600 flex gap-2 lg:hidden'>
          <li className='transition ease-in-out delay-50 duration-300 hover:scale-110'>
            <a
              href='https://www.linkedin.com/in/kristin-zentner-651bb1112/'
              target='_blank'
              className='cursor-pointer transition ease-in-out delay-50 duration-300 hover:scale-110'
            >
              <LinkedInIcon size={24} />
            </a>
          </li>
          <li className='transition ease-in-out delay-50 duration-300 hover:scale-110'>
            <a href='https://github.com/kfoxzz' target='_blank' className='cursor-pointer'>
              <GithubIcon size={24} />
            </a>
          </li>
        </ul>
        <div className='text-xs text-zinc-600 lg:text-zinc-400'>
          Photo by{' '}
          <a
            href='https://unsplash.com/@agforl24?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
            className='cursor-pointer hover:underline'
          >
            Tai Bui
          </a>{' '}
          on{' '}
          <a
            href='https://unsplash.com/photos/a-close-up-of-a-laptop-keyboard-with-a-blurry-background-EP634JhALnA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
            className='cursor-pointer hover:underline'
          >
            Unsplash
          </a>
        </div>
        <p className='text-xs text-zinc-400 lg:text-zinc-300'>
          Kristin Zentner &#169; 2023. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
