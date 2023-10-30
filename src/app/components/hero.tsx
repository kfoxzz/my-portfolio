import { FaGithubSquare as GithubIcon, FaLinkedin as LinkedInIcon } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className='relative p-8 pt-44 pb-24 lg:fixed lg:w-50 lg:z-[100] lg:h-full'>
      <h1 className="text-7xl font-bold tracking-wide pb-6 after:content-['Kristi'] after:text-violet-500">
        Hi, I&rsquo;m{' '}
      </h1>
      <h2 className='text-2xl font-thin pb-4'>Software Engineer</h2>

      <div className='flex pb-16 gap-2'>
        <a
          href='https://www.linkedin.com/in/kristin-zentner-651bb1112/'
          target='_blank'
          className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out'
        >
          <LinkedInIcon size={24} />
        </a>
        <a
          href='https://github.com/kfoxzz'
          target='_blank'
          className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out'
        >
          <GithubIcon size={24} />
        </a>
      </div>

      <a
        className='bg-violet-500 text-black font-medium py-2 px-6 rounded hover:bg-violet-400 transition duration-300 ease-in-out'
        href='#about-me'
      >
        About me
      </a>
    </section>
  );
}
