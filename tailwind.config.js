/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        MarianShade1:'#25325E',
        MarianTint4:'#D5D9E3',
        MarianBlue:'#2E3F75'
      },
      padding:{
        33:"8.25rem",
      },
      fontSize:{
        13:'0.813rem'
      },
      screens:{
        xs:'451px',
      }
    },
  },
  plugins: [],
}

