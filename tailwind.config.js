/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      primary: '#DDBF5F',
      secondary: '#F1E27B',
      neutral: '#B7852E',
    },
    fontFamily: {
      poppins: ["Poppins"],
      walton:["Walton","sans-serif"],
      ubuntu:["Ubuntu"]
    },
  },
  },
  plugins: [],
}