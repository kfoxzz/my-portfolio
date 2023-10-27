'use client';

import { useState } from 'react';
import type { Position } from '../lib/types';
import { SlArrowDown as Arrow } from 'react-icons/sl';

export default function Position({ position }: { position: Position }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className='cursor-pointer' onClick={toggleOpen}>
        <h4 className='text-xl pt-4 font-medium text-zinc-300'>{position.title}</h4>

        <div className='flex justify-between items-center'>
          <div>
            <h4 className='text-lg text-zinc-400'>{position.company}</h4>
            <p className='text-sm text-zinc-500 italic'>{position.dates}</p>
          </div>
          <Arrow size={24} className={`${open ? 'animate-flip-reverse' : 'animate-flip'}`} />
        </div>
      </div>

      <div className='overflow-hidden rounded-lg pt-4'>
        <ul
          className={`p-4 text-sm text-zinc-400 flex flex-col gap-2 bg-zinc-900 rounded-lg transition-[margin] duration-700 delay-0 ease-in-out ${
            open ? 'm-0' : '-mt-[200%]'
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
