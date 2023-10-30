'use client';

import { useState } from 'react';
import { RESUME } from '../lib/resume';
import Position from './position';

const initialState = RESUME.map(position => ({
  [position.id]: false,
})).reduce((acc, curr) => ({ ...acc, ...curr }));

export default function Resume() {
  const [openAccordions, setOpenAccordions] = useState(initialState);

  const onOpen = (id: number) => {
    if (!openAccordions[id]) {
      return setOpenAccordions({
        ...initialState,
        [id]: true,
      });
    } else {
      return setOpenAccordions(initialState);
    }
  };

  return (
    <section
      id='resume'
      className='relative p-8 bg-zinc-800 flex flex-col lg:h-screen lg:snap-center lg:snap-always lg:flex lg:flex-col lg:justify-center'
    >
      <h3 className='text-violet-500 pb-4 lg:text-xl'>RESUME</h3>

      {RESUME.map(position => {
        return (
          <Position
            key={position.id}
            position={position}
            open={openAccordions[position.id]}
            onOpen={() => onOpen(position.id)}
          />
        );
      })}

      <a
        href='/resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='w-fit mt-6 text-sm font-medium border-solid border-violet-500 border-b pb-px transition ease-in-out delay-50 duration-300  hover:scale-110'
      >
        Download resume
      </a>
    </section>
  );
}
