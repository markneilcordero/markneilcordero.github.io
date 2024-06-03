/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".{html,js}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black
        secondary: '#38BDF8', // Sky Blue
        accent: '#E0F7FF', // Sky Blue Light
        neutral: {
          100: '#F3F4F6', // Light Gray
          900: '#000000', // Black
        },
      },
      fontFamily: {
        sans: ['CartographCF', 'sans-serif'],
        body: ['Roboto', 'Open Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}