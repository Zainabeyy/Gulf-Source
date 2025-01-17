/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    keyframes: {
      slide: {
        '0%': { transform: 'translate(0)' },
        '100%': { transform: 'translate(-100%)' },
      },
  },
  animation:{
    slide:'slide 10s infinite linear',
  },
    extend: {
      fontFamily:{
        Inter: ['Inter', 'sans-serif'],
        Montserrat:['Montserrat', 'sans-serif']
      },
      colors: {
        MarianShade1:'#25325E',
        MarianShade2: '#1C2646',
        MarianTint1:'#586591',
        MarianTint2:'#828CAC',
        MarianTint3:'#ABB2C8',
        MarianTint4:'#D5D9E3',
        MarianBlue:'#2E3F75',
        MarianShade4: "#090D17",
        PrimaryGradientClr1:'#2ca8dc',
        PrimaryGradientClr2:'#d0df8a',
        SaudiFlagGreen: "#165D31",
        SaudiFlagTint1:'#457D5A',
        SaudiFlagTint2:'#739E83',
        SaudiFlagTint3:'#A2BEAD',
        SaudiFlagTint4:'#D0DFD6',
        SaudiFlagShade1:'#124A27',
        SaudiFlagShade3:'#092514',
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

