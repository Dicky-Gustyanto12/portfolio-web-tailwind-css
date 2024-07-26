/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: 'true',
      padding: '40px',
    },
    extend: {
      colors: {
        'darkBlue':'#1e3a8a',
        'darkSlate' : '#020617',
        'semiDarkSlate' : '#64748b',
        'lightDarkSlate' : '#94a3b8',
      },
      
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

