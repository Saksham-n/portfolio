/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#ffffff',
          100: '#f8fafc',
          200: 'rgba(255, 255, 255, 0.5)',
          300: 'rgba(255, 255, 255, 0.7)',
          500: '#cbd5e1',
          600: 'rgba(255, 255, 255, 0.3)',
        },
        white: {
          DEFAULT: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};
