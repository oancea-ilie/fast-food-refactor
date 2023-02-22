/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'rgb(164, 26, 19)',
        'red-l': 'rgb(233, 48, 48)',
        orange: '#eec300',
        black: 'rgb(36, 36, 36)',
      },
      fontFamily: {
        // sans: ['Shantell Sans'],
      },
    },
  },
  plugins: [],
};
