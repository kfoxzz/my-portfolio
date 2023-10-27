import Image from 'next/image';
import Navbar from './components/navbar';
import Hero from './components/hero';
import AboutMe from './components/aboutMe';
import Resume from './components/resume';
import Projects from './components/projects';
import ContactMe from './components/contactMe';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className='bg-zinc-900'>
      <Image
        src='/code.jpeg'
        alt='hero image'
        width={3840}
        height={5760}
        className='max-h-screen bg-center bg-cover object-cover blur-sm opacity-50 absolute'
      />

      <Navbar />
      <Hero />
      <AboutMe />
      <Resume />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}
