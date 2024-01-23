import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: 'Realtime Object Detector',
    description:
      'A simple project using the TensorFlow COCO-SSD pre-trained model to identify objects in real time. Built with Next.js, Tailwind CSS, and TensorFlow.js.',
    github: 'https://github.com/kfoxzz/object-recognition-smart-cam',
    link: 'https://object-recognition-smart-cam.vercel.app/',
  },
  {
    id: 1,
    name: 'YouNotes',
    description:
      'A Chrome extension that utilizes the power of OpenAI Chat-GPT to summarize YouTube videos. Built with Next.js.',
    github: 'https://github.com/kfoxzz/you-notes',
  },
  {
    id: 2,
    name: "Kristi's Coffee Corner",
    description:
      'A mock website for a coffee shop. Features an e-commerce shop and checkout built with the Stripe API. Built with React.js and Node.js.',
    github: 'https://github.com/kfoxzz/coffee-corner-react',
    link: 'https://kristis-coffee-corner.onrender.com',
  },
  {
    id: 3,
    name: 'Gratitude',
    description:
      'An iOS app built to record and share your daily gratitude lists. Built with React Native and Google Firebase.',
    github: 'https://github.com/kfoxzz/gratitude',
  },
];
