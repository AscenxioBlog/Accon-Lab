/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:[ "Yrsa", 'serif']
      },
      colors:{
        textc: '#2c8cd0',
        bodybg: '#ecf0f1',
        boldtext:'#092f6b'
      },
      screens:{
        'md': '768px',   // Tablets (iPad included)
      'lg': '1024px',  // Laptops (all sizes)
      'xl': '1440px',  // Large screens (desktops)
      '2xl': '1920px',
      }
    },
  },

  plugins: [
    require('daisyui'),
  ],
}

