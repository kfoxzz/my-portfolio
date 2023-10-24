'use client';

import { useState } from 'react';
import type { Position } from '../lib/types/position';
import { SlArrowDown as Arrow } from 'react-icons/sl';

export default function Position({ position }: { position: Position }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <h4 className='text-2xl pb-2 pt-8 mb-4 text-right font-medium border-b'>{position.company}</h4>

      <div className='flex justify-between items-center pb-4'>
        <div>
          <h4 className='text-xl text-violet-500'>{position.title}</h4>
          <p className='text-sm italic'>{position.dates}</p>
        </div>
        <Arrow
          size={24}
          onClick={toggleOpen}
          className={`cursor-pointer ${open ? 'animate-flip' : 'animate-flip-reverse'}`}
        />
      </div>

      <div className='overflow-hidden rounded-lg'>
        <ul
          className={`p-4 text-sm flex flex-col gap-2 bg-neutral-800 rounded-lg transition-[margin] duration-700 delay-0 ease-in-out ${
            open ? '-mt-[200%]' : 'm-0'
          }`}
        >
          {position.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
