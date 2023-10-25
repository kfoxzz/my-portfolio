export default function Hero() {
  return (
    <section className='relative p-8 pt-44 pb-24'>
      <h1 className="text-7xl font-bold tracking-wide pb-6 after:content-['Kristi'] after:text-violet-500">
        Hi, I&rsquo;m{' '}
      </h1>
      <h2 className='text-2xl font-thin pb-16'>Software Engineer</h2>

      <a
        className='bg-violet-500 text-black font-medium py-2 px-6 rounded hover:bg-violet-400 transition duration-300 ease-in-out'
        href='#about-me'
      >
        About me
      </a>
    </section>
  );
}
