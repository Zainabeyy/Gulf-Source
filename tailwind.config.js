/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Inter: ['Inter', 'sans-serif'],
        Montserrat:['Montserrat', 'sans-serif']
      },
      colors: {
        MarianShade1:'#25325E',
        MarianShade2: '#1C2646',
        MarianTint4:'#D5D9E3',
        MarianBlue:'#2E3F75',
        MarianShade4: "#090D17",
        PrimaryGradientClr1:'#2ca8dc',
        PrimaryGradientClr2:'#d0df8a',
        SaudiFlagTint2:'#739E83',
        SaudiFlagShade4: "#04130A",
        PictonTint4:"#D5EEF8",
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

