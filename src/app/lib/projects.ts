import type { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: 'YouNotes',
    description:
      'A Chrome extension that utilizes the power of OpenAI Chat-GPT to summarize YouTube videos. Built with Next.js.',
    github: 'https://github.com/kfoxzz/you-notes',
  },
  {
    id: 1,
    name: "Kristi's Coffee Corner",
    description:
      'A mock website for a coffee shop. Features an e-commerce shop and checkout built with the Stripe API. Built with React.js and Node.js.',
    github: 'https://github.com/kfoxzz/coffee-corner-react',
  },
  {
    id: 2,
    name: 'Gratitude',
    description:
      'An iOS app built to record and share your daily gratitude lists. Built with React Native and Google Firebase',
    github: 'https://github.com/kfoxzz/gratitude',
  },
];
