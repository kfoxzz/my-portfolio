export default function Resume() {
  return (
    <section id='resume' className='relative p-8 pb-20 bg-black'>
      <h3 className='text-violet-500 pb-6'>RESUME</h3>

      <h4 className='text-2xl py-2 mb-4 text-right font-medium border-b'>Hawker Software</h4>
      <h4 className='text-xl text-violet-500'>Front End Engineer</h4>
      <p className='text-sm pb-8 italic'>Jan 2023 - Oct 2023</p>

      <ul className='text-sm list-disc flex flex-col gap-2'>
        <li>
          Enhanced the React frontend&rsquo;s reliability with a Ruby-based end-to-end testing suite,
          resulting in a test coverage increase of over 30%
        </li>
        <li>
          Built a robust reporting feature capable of processing large amounts of data, offering 3 distinct
          report templates, to cater to diverse analytics needs
        </li>
        <li>
          Collaborated with executive leadership and backend engineers to ensure streamlined planning,
          development, and delivery of client-focused features
        </li>
        <li>
          Managed the lifecycle of new features, tech debt, and bug resolutions across the stack using agile
          methodologies and UI/UX design principles, prioritizing product stability and timely releases
        </li>
        <li>Dedicated 70% of work time to front-end development and 30% to backend tasks</li>
      </ul>

      <h4 className='text-2xl py-2 mb-4 text-right font-medium border-b'>Array</h4>

      <div className='flex space-between'>
        <div>
          <h4 className='text-xl text-violet-500'>Software Engineer II</h4>
          <p className='text-sm pb-8 italic'>Aug 2022 - Jun 2023</p>
        </div>
        <p>button</p>
      </div>

      <ul className='text-sm list-disc flex flex-col gap-2'>
        <li>
          Developed a full-stack web-based UI/UX design application in Svelte and Node.js that streamlined the
          client onboarding process by reducing the workload of design and engineering teams
        </li>
        <li>
          Delivered 3+ long-term projects aimed at improving our product suite, including the creation of new
          embeddable web components
        </li>
        <li>
          Mentored and guided junior engineers by providing regular one-on-one assistance to solidify best
          practices and overall knowledge of important programming principles
        </li>
        <li>
          Contributed to the maintenance and improvement of existing code through debugging, regular testing,
          and identifying areas for optimization
        </li>
      </ul>

      <h4 className='text-2xl text-violet-500 pt-6'>Software Engineer II</h4>
      <p className='text-sm pb-8 italic'>March 2022 - Aug 2022</p>

      <ul className='text-sm list-disc flex flex-col gap-2'>
        <li>
          Collaborated across product, design, and engineering teams to maintain a suite of over 10 embeddable
          and independently functioning web components written in Svelte, accessed by hundreds of thousands of
          users daily
        </li>
        <li>
          Implemented a comprehensive end-to-end testing suite with Playwright, which streamlined the QA
          process, reduced front-end related production bugs, and improved release quality
        </li>
        <li>
          Participated in daily code reviews with both senior and junior engineers to maintain elegant,
          efficient and dry code
        </li>
      </ul>
    </section>
  );
}
