import { RESUME } from '../lib/resume';
import Position from './position';

export default function Resume() {
  return (
    <section id='resume' className='relative p-8 pb-20 bg-black flex flex-col'>
      <h3 className='text-violet-500 pb-4'>RESUME</h3>

      {RESUME.map((position, index) => {
        return <Position key={index} position={position} />;
      })}

      <a
        href='/resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='w-fit text-sm bg-zinc-200 text-black font-medium py-2 mt-4 px-6 rounded inline-block hover:bg-zinc-400 transition duration-300 ease-in-out self-end'
      >
        Download resume
      </a>
    </section>
  );
}
