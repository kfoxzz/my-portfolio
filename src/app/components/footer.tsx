import { FaGithubSquare as GithubIcon, FaLinkedin as LinkedInIcon } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='relative flex flex-col items-center gap-6 py-10'>
      {/* TODO: Add this about about me or in footer somewhere */}
      {/* Photo by{' '}
      <a
        href='https://unsplash.com/@agforl24?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
        className='cursor-pointer'
      >
        Tai Bui
      </a>{' '}
      on{' '}
      <a
        href='https://unsplash.com/photos/a-close-up-of-a-laptop-keyboard-with-a-blurry-background-EP634JhALnA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
        className='cursor-pointer'
      >
        Unsplash
      </a> */}
      <ul className='text-zinc-600 text-sm text-center flex flex-col gap-2'>
        <li>
          <a href='#about-me'>About me</a>
        </li>
        <li>
          <a href='#resume'>Resume</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        {/* TODO: this should open the modal, not link to #contact-me */}
        <li>
          <a href='#contact-me'>Contact me</a>
        </li>
      </ul>
      <a
        className='text-violet-500 border-b border-violet-500 mb-4'
        href='mailto:me@kristizentner.com'
        target='_blank'
      >
        me@kristizentner.com
      </a>
      <ul className='text-zinc-600 flex gap-2'>
        <li>
          <a
            href='https://www.linkedin.com/in/kristin-zentner-651bb1112/'
            target='_blank'
            className='cursor-pointer'
          >
            <LinkedInIcon size={24} />
          </a>
        </li>
        <li>
          <a href='https://github.com/kfoxzz' target='_blank' className='cursor-pointer'>
            <GithubIcon size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
