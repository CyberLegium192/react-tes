/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'Sans-serif']
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}