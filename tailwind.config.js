/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      backgroundColor: {
        'primary': '#5DA1D5',
        'secondary': '#F0F0F0',
        'accent': '#FFA726',
        'nav': '#1E3A5F',
        'input': '#F0F0F0',
      },
      textColor: {
        'primary': '#5DA1D5',
        'secondary': '#F0F0F0',
        'accent': '#FFA726',
        'dark': '#333333',
        'placeholder': '#A9A9A9',
        'label': '#1E3A5F',
      },
      borderColor: {
        'input': '#D3D3D3',
      },
    },
  },
    variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
