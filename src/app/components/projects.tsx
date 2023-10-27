import type { Project } from '../lib/types';
import { PROJECTS } from '../lib/projects';
import { FaGithub as Github } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id='projects' className='relative p-8 bg-zinc-900 flex flex-col'>
      <h3 className='text-violet-500 pb-8'>PROJECTS</h3>

      <div>
        {PROJECTS.map((project: Project, index: number) => {
          return (
            <div key={index} className='flex flex-col pb-6 gap-1'>
              <h4 className='text-zinc-300 font-medium text-xl pb-1'>{project.name}</h4>
              <p className='text-sm text-zinc-400 pb-1'>{project.description}</p>
              <a
                className='text-sm text-zinc-500 italic cursor-pointer w-fit hover:text-zinc-400 transition duration-300 ease-in-out'
                href={project.github}
                target='_blank'
              >
                <Github size={28} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
