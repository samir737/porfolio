/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        '1/3': '33.333333%',
        '2/3': '66.666666%',
      },
      animation: {
        fadeIn: 'fadeIn 5s 1',
        fadeout: 'fadeout 5s 1',
        fadeleft: 'fadeleft 4s 1',
        faderight: 'faderight 4s 1',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-500px)' },
          // '50%': { opacity: '0.5', transform: 'translateY(-200px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        fadeout: {
          '0%': { opacity: '0', transform: 'translateY(500px)' },
          // '50%': { opacity: '0.5', transform: 'translateY(-200px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        faderight: {
          '0%': { opacity: '0', transform: 'translateX(500px)' },
          '100%': { opacity: '1', transform: 'translateX(0px)' },
        },
        fadeleft: {
          '0%': { opacity: '0', transform: 'translateX(-500px)' },
          '100%': { opacity: '1', transform: 'translateX(0px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
