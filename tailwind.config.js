/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {colors: {
      primary: '#c4a230',
      secondary: '#F1E27B',
      neutral: '#B7852E',
      
    },
    fontFamily: {
      'Poppins': ["Poppins",'sans-serif'],
    
      'ubuntu':["Ubuntu"],
      'embed':["Exo 2"],
      'Protest':["Protest Guerrilla","sans-serif"],
    },
  },
  },
  plugins: [],
}