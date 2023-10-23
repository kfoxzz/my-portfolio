import Image from 'next/image';
import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutMe from './components/aboutMe';
import Resume from './components/resume';

export default function Home() {
  return (
    <main>
      <Image
        src='/code.jpeg'
        alt='hero image'
        width={3840}
        height={5760}
        className='max-h-screen bg-center bg-cover object-cover blur-sm brightness-50 absolute'
      />

      <Navbar />
      <Hero />
      <AboutMe />
      <Resume />

      <section>
        {/* projects */}
        {/* list projects with links to github and live site (if applicable) */}
        {/* maybe add a carousel of images? */}
      </section>

      <section>
        {/* contact me */}
        {/* form with name, email, message */}
        {/* button to submit */}
        {/* need to figure out what service to use */}
      </section>

      <footer>
        {/* need to credit for hero photo
        Photo by <a href="https://unsplash.com/@agforl24?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tai Bui</a> on <a href="https://unsplash.com/photos/a-close-up-of-a-laptop-keyboard-with-a-blurry-background-EP634JhALnA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
   */}
      </footer>
    </main>
  );
}
