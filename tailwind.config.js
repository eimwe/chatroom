/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./**/*.html', './src/**/*.vue', './src/components/**/*.vue', './src/views/**/*.vue'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')]
};
