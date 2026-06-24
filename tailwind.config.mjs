/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Olivia Rodrigo-inspired warm pink palette
        blush:    { 50: '#fff0f4', 100: '#fce4ec', 200: '#f8bbd0', 300: '#f48fb1', 400: '#f06292', 500: '#e91e8c', 600: '#d81b60' },
        petal:    { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6' },
        lavender: { 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6' },
        berry:    { 500: '#9c27b0', 600: '#7b1fa2', 700: '#6a1b9a' },
        cream:    { DEFAULT: '#fff8fa', dark: '#f5e8ed' },
        ink:      { DEFAULT: '#1a0a0f', light: '#4a2030', muted: '#7a4050' },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        hand:    ['Reenie Beanie', 'Caveat', 'cursive'],
        script:  ['Dancing Script', 'cursive'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out 1.5s infinite',
        'float-delay':  'float 7s ease-in-out 3s infinite',
        'spin-slow':    'spin 25s linear infinite',
        'pulse-soft':   'pulseSoft 3s ease-in-out infinite',
        'wiggle':       'wiggle 2s ease-in-out infinite',
        'fade-up':      'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'confetti':     'confettiFall 7s linear infinite',
        'drift':        'drift 10s ease-in-out infinite alternate',
        'sparkle':      'sparkle 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%':      { transform: 'translateY(-18px) rotate(4deg)' },
          '66%':      { transform: 'translateY(-8px) rotate(-3deg)' },
        },
        pulseSoft: {
          '0%,100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%':     { opacity: '1',   transform: 'scale(1.04)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%':     { transform: 'rotate(2deg)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(36px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        confettiFall: {
          '0%':   { transform: 'translateY(-10vh) rotate(0deg)',   opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        drift: {
          '0%':   { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(20px, -30px) rotate(8deg)' },
        },
        sparkle: {
          '0%':   { opacity: '0.4', transform: 'scale(0.8) rotate(0deg)' },
          '100%': { opacity: '1',   transform: 'scale(1.2) rotate(15deg)' },
        },
      },
    },
  },
  plugins: [],
};
