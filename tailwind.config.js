/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      backgroundColor: {
        'primary-light': '#eef2f6',
        'primary-main': '#2196f3',
        'primary-dark': '#1e88e5',
        'secondary-light': '#ede7f6',
        'secondary-main': '#673ab7',
        'secondary-dark': '#5e35b1',
        
      },
      textColor: {
        'primary': "#364152",
        'secondary': "#673ab7",
        'dark': '#121926',
      },
      borderColor: {
        'primary-light': '#eef2f6',
        'primary-main': '#2196f3',
        'primary-dark': '#1e88e5',
        'secondary-light': '#ede7f6',
        'secondary-main': '#673ab7',
        'secondary-dark': '#5e35b1',
      },
      
    },
  },
  variants: {},
  plugins: [],
};