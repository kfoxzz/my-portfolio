export default function Hero() {
  return (
    <section className='relative top-32 p-12'>
      <h1 className="text-7xl font-bold tracking-wide pb-6 after:content-['Kristi'] after:text-violet-500">
        Hi, I&rsquo;m{' '}
      </h1>
      <h2 className='text-3xl pb-16'>Software Engineer</h2>

      <a
        className='bg-violet-500 text-black font-medium py-2 px-4 rounded hover:bg-violet-400'
        href='#about-me'
      >
        About me
      </a>
    </section>
  );
}
