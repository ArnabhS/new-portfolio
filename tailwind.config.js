/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        '53': 'repeat(53, minmax(0, 1fr))',
      },
      fontFamily: {
        poppins: "poppins",
        outfit:"outfit"
      },
      fontStyle: {
        italic: 'italic', 
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};