/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem'
        }
      }
    }
  },
  plugins: []
};
