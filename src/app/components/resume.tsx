import { RESUME } from '../lib/resume';
import Position from './position';

export default function Resume() {
  return (
    <section id='resume' className='relative p-8 pb-20 bg-black'>
      <h3 className='text-violet-500 pb-1'>RESUME</h3>

      {RESUME.map((position, index) => {
        return <Position key={index} position={position} />;
      })}
    </section>
  );
}
