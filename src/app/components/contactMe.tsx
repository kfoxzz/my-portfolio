'use client';

import { useContext } from 'react';
import ContactForm from './contactForm';
import { ModalContext } from '../context/modalContext';

export default function ContactMe() {
  const { open, setOpen } = useContext(ModalContext);

  const onToggleForm = () => {
    setOpen(!open);
  };

  return (
    <section
      id='contact-me'
      className='relative p-8 bg-zinc-800 lg:h-screen lg:snap-center lg:snap-always lg:flex lg:flex-col lg:justify-center'
    >
      <h3 className='text-violet-500 pb-6 lg:hidden'>CONTACT ME</h3>

      <div className='flex flex-col gap-2 lg:self-center lg:items-center'>
        <p className='lg:text-xl'>Want to make something together?</p>
        <button
          className='text-violet-400 font-medium border-b border-violet-400 w-fit cursor-pointer hover:text-violet-500 hover:border-violet-500 lg:text-2xl'
          onClick={ev => {
            ev.stopPropagation();
            onToggleForm();
          }}
        >
          Say hi
        </button>
      </div>

      {open && <ContactForm onCloseForm={onToggleForm} />}
    </section>
  );
}
