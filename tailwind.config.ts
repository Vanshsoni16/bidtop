import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#e4e9f2',
          200: '#c8d3e3',
          300: '#9aabca',
          400: '#647aab',
          500: '#405a8e',
          600: '#2d4270',
          700: '#1e2f57',
          800: '#131f3d',
          900: '#0a1428',
          950: '#060d1a',
        },
        accent: {
          DEFAULT: '#10b981',
          hover: '#059669',
          soft: '#d1fae5',
        },
        gold: {
          DEFAULT: '#f59e0b',
          soft: '#fef3c7',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;