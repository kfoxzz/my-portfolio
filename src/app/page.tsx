import ModalProvider from './components/modalProvider';
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
    <main className='bg-zinc-900 lg:flex lg:flex-col'>
      <Image
        src='/code.jpeg'
        alt='hero image'
        width={3840}
        height={5760}
        className='max-h-screen bg-center bg-cover object-cover blur-sm opacity-50 absolute lg:fixed lg:w-1/2'
      />

      <ModalProvider>
        <Navbar />
        <Hero />
        <div className='lg:snap-both lg:snap-mandatory lg:overflow-scroll lg:self-end lg:w-1/2 lg:h-screen'>
          <AboutMe />
          <Resume />
          <Projects />
          <ContactMe />
          <Footer />
        </div>
      </ModalProvider>
    </main>
  );
}
