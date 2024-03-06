/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows:{
        appBody:'auto 1fr auto',
        appHome:'auto 1fr',
        appFooter: 'auto auto'
      },
      gridTemplateColumns:{
        appHeader: 'auto 1fr auto',
        appFooter: 'auto 1fr'
      },
      blur:{
        blob:'30px'
      }
    },
  },
  plugins: [],
}

