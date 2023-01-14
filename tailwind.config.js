/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-rgba': 'rgba(2, 6, 21, 0.75)',

      },
      fontFamily: {
        montserrat: "montserrat",
        montserratBold: "montserratBold",
        roboto:"roboto",
      },
    },
  },
  plugins: [],
}