import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [forms],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light colors
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',

        // Dark colors
        'primary-dark': '#0D2438',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',

        // Extended v3 color
        gray: colors.neutral,
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
    },
  },
};

export default config;
