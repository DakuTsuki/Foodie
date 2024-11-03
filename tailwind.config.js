import { transform } from 'framer-motion';
import LowerBanner from './src/Component/Hero/LowerBanner';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
   
    extend: {
      boxShadow:{
        xl: '10px 10px 44px -25px rgba(0,0,0,0.75)',
      },
      backgroundImage: {
        heroBanner: "src/assets/Hero-Banner.png",
        LowerBanner: "src/assets/Drop-Banner.png"
      },
    screens:{
      'tablet': '800px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
      colors: {
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        "white": "rgb(255 255 255)",
        'light-white': "rgba(255, 255, 255, 0.9)", 
        "Brown": '#967a19',
        "lighter-black": "color: rgba(0,0,0,0.6);",
        'light-black': 'rgba(0, 0, 0, 0.7)',
      },
      
      fontFamily: {
        sans: [ "Open Sans", "Helvetica Neue",],
        serif: ["Helvetica", "Arial", "sans-serif"],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    darkMode: 'selector',

    keyframes:{
      slider:{
        '0%': {transform: 'translateY(0)'},
        '50%': {transform: 'translateY(24)'},
        '100%': {transform: 'translateY(0)'},
      },
      fadeInUpSlight:{
        '0%': {opacity: '0', transform: 'translate3d(0, 8px, 0)'},
        '100%': {opacity: '1', transform: 'none'} 
      },
      zoomIn:{
        '0%':{opacity: '0', transform: 'scale3d(.9, .9, .9)'},
        '50%':{opacity: '1'}
      }
    },
    animation: {
      zoomIn: 'zoomIn 1s',
      fadeInUpSlight: 'fadeInUpSlight 0.5s ',
      spinSlow: 'spin 40s linear infinite',
      slider: 'slider 1s linear infinite'
    },

  },
  plugins: [],
}
}
