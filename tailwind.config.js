/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,module.css}",
    "./styles/**/*.{js,ts,jsx,tsx,css}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      w: {
        // '0.115': '11.5%',
        '98': '26rem',
        '194': '50rem',
      },
      colors: {
        'marble': '#e5e5e4',
      }
    },  
  },
  layers: {
    utilities: ['@tailwind utilities', '@layer utilities', 'animate'],
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
