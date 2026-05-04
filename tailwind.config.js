/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A6BCC',
          lightblue: '#4DA3FF',
          dark: '#050A14',
          darker: '#020509',
          steel: '#8BA8C8',
          silver: '#C8D8E8',
          accent: '#FF6B1A',
        }
      },
      fontFamily: {
        heading: ['Barlow Condensed', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-right': 'slideRight 0.8s ease forwards',
        'slide-left': 'slideLeft 0.8s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'truck-move': 'truckMove 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
        'border-run': 'borderRun 3s linear infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        truckMove: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #1A6BCC, 0 0 20px #1A6BCC' },
          '100%': { textShadow: '0 0 20px #4DA3FF, 0 0 40px #4DA3FF, 0 0 60px #1A6BCC' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        borderRun: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "linear-gradient(rgba(26,107,204,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,107,204,0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
