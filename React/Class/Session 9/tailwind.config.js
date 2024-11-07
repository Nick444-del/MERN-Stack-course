/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#1B9C85',
      'secondary': '#E5E5E5',
      'lightweight': '#851b9c',
      'brown': '#9c851b'
    },
    extend: {},
  },
  plugins: [],
}