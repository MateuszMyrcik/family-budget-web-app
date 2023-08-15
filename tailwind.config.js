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
        'grey-50': '#F8FAFC',
        'grey-100': '#EEF2F6',
        'grey-200': '#E3E8EF',
        'grey-300': '#CDD5DF',
        'grey-500': '#697586',
        'grey-600': '#4B5565',
        'grey-700': '#364152',
        'grey-900': '#121926',
        
      },
      textColor: {
        'primary': "#364152",
        'secondary': "#673ab7",
        'dark': '#121926',
        'primary-light': '#eef2f6',
        'primary-main': '#2196f3',
        'primary-dark': '#1e88e5',
        'secondary-light': '#ede7f6',
        'secondary-main': '#673ab7',
        'secondary-dark': '#5e35b1',
        'success-light': '#b9f6ca',
        'success-main': '#00e676',
        'success-dark': '#00c853',
        'error-light': '#ef9a9a',
        'error-main': '#f44336',
        'error-dark': '#c62828',
        'warning-light': '#fff8e1',
        'warning-main': '#ffe57f',
        'warning-dark': '#ffc107',
        'grey-50': '#F8FAFC',
        'grey-100': '#EEF2F6',
        'grey-200': '#E3E8EF',
        'grey-300': '#CDD5DF',
        'grey-500': '#697586',
        'grey-600': '#4B5565',
        'grey-700': '#364152',
        'grey-900': '#121926',
      },
      borderColor: {
        'primary-light': '#eef2f6',
        'primary-main': '#2196f3',
        'primary-dark': '#1e88e5',
        'secondary-light': '#ede7f6',
        'secondary-main': '#673ab7',
        'secondary-dark': '#5e35b1',
      },
      fill: {
        'primary-light': '#eef2f6',
        'primary-main': '#2196f3',
        'primary-dark': '#1e88e5',
        'secondary-light': '#ede7f6',
        'secondary-main': '#673ab7',
        'secondary-dark': '#5e35b1',
        }
      
    },
  },
  variants: {},
  plugins: [],
};
