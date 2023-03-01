/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: 'rgb(164, 26, 19)',
          secondary: '#eec300',
          error: 'rgb(233, 48, 48)',
          neutral: 'rgb(36, 36, 36)',
          info: 'rgb(168, 168, 168)',
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        red: '#a41a13',
        'red-l': '#e93030',
        orange: '#eec300',
        black: '#242424',
        blue: '#0f1924',
        info: '#a8a8a8',
        divider: '#ffffff1a',
        darkred: '#de9692',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
};
