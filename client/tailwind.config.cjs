/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'rgb(164, 26, 19)',
        orange: '#eec300',
      },
      fontFamily: {
        // sans: ['Shantell Sans'],
      },
    },
  },
  plugins: [],
};
