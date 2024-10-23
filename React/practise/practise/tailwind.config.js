/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // background
      "very-dark-violet": "hsl(268, 75%, 9%)", // main background
      "very-dark-violet-2" : "hsl(268, 71%, 12%)", // toggle background, keypad background, screen background
      // keys
      "dark-violet": "hsl(281, 89%, 26%)", // key background
      "vivid-mangenta": "hsl(285, 91%, 52%)", // key shadow
      "pure-cyan": "hsl(176, 100%, 44%)", // key background, toggle
      "soft-cyan" : "hsl(177, 92%, 70%)", // key shadow
      "very-dark-violet": "hsl(268, 47%, 21%)", // key background
      "dark-mangenta": "hsl(290, 70%, 36%)", // key shadow
      // text
      "light-yellow": "hsl(52, 100%, 62%)",
      "very-dark-blue": "hsl(198, 20%, 13%)",
      "white": "hsl(0, 0%, 100%)" // text
    },
    extend: {
      fontFamily: {
        'sans' : '"League Spartan", sans-serif'
      }
    },
  },
  plugins: [],
}

