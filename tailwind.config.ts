import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        'spin-icon': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(180deg)' },
        },
        'flip-reverse': {
          '0%': { transform: 'rotateX(180deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.2s ease-in-out forwards',
        'spin-icon': 'spin-icon 0.2s ease-in-out forwards',
        flip: 'flip 0.5s ease-in-out forwards',
        'flip-reverse': 'flip-reverse 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
