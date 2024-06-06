/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        skyblue: '#00BFFF', // Brighter Sky Blue
        black: '#000000', // Black
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({
        'skyblue': '#00BFFF', // Brighter Sky Blue
        'black': '#FFFFFF',
      }),
    },
  },
  plugins: [],
}
