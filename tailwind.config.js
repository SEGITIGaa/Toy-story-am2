/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue':"#003F8C",
        'light-blue':"#9DDAEC",
        'yellow':"#FFD600",
        'red':"#FF0000",
        'red-maroon':"#C71225",
        'pink':"#FFD9DF",
      },
      backgroundImage:{
        'patern-1':'url(/images/ts-patern.png)',
      },
      fontFamily:{
        'inter': 'Inter',
        'montserrat': 'Montserrat',
        "lobster":"Lobster Two"
      }
    },
  },
  plugins: [],
}