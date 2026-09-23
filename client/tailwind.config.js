/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: false,
    extend: {
      colors: {
        forest: {
          DEFAULT: '#12372A',
          dark: '#0B2119',
        },
        amber: {
          DEFAULT: '#F4A261',
          dark: '#E08D45',
        },
        mint: {
          DEFAULT: '#A8D5BA',
          dark: '#7FBB98',
        },
        surface: '#FFFFFF',
        background: '#F8F7F2',
        border: '#DDE5DF',
        text: {
          primary: '#17211B',
          secondary: '#66736B',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1: ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        h2: ['2rem', { lineHeight: '1.2' }],
        h3: ['1.5rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        card: '0 12px 24px -12px rgba(18, 55, 42, 0.18)',
        'card-hover': '0 18px 32px -14px rgba(18, 55, 42, 0.26)',
        nav: '0 4px 16px -8px rgba(18, 55, 42, 0.15)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
