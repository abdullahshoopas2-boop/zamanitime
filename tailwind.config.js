/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Alexandria"', '"Cairo"', '"Tajawal"', 'system-ui', 'sans-serif'],
        english: ['"Outfit"', '"Inter"', 'system-ui', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
        calligraphy: ['"Amiri"', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#16a34a',
          600: '#15803d',
          700: '#166534',
          800: '#14532d',
          900: '#052e16',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        sand: {
          50: '#faf8f5',
          100: '#f4efe8',
          200: '#e8ded0',
          300: '#d6c4ad',
          400: '#be9f83',
          500: '#aa7e5e',
          800: '#231d18',
          900: '#171310',
          950: '#0e0b09',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
