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
          secondary:'#eec300',
          error:'rgb(233, 48, 48)',
          neutral:'rgb(36, 36, 36)',
          info:"rgb(168, 168, 168)",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        red: 'rgb(164, 26, 19)',
        'red-l': 'rgb(233, 48, 48)',
        orange: '#eec300',
        black: 'rgb(36, 36, 36)',
        blue:'rgb(15, 25, 36)',
        info:"rgb(168, 168, 168)",
        divider:'rgba(255, 255, 255, 0.1)',
        darkred:'rgb(222, 150, 146)',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
};
