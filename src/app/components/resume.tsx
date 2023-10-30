import { RESUME } from '../lib/resume';
import Position from './position';

export default function Resume() {
  return (
    <section
      id='resume'
      className='relative p-8 bg-zinc-800 flex flex-col lg:h-screen lg:snap-center lg:snap-always'
    >
      <h3 className='text-violet-500 pb-4'>RESUME</h3>

      {RESUME.map((position, index) => {
        return <Position key={index} position={position} />;
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
