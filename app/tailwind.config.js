/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      w: {
        '98': '26rem',
      },
      colors: {
        'marble': '#e5e5e4',
      }
    },
  },
  plugins: [],
}
