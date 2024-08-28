/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via a 'dark' class
  content: ["./src/**/*.{html,js}"], // Adjust path if needed
  theme: {
    extend: {
      fontSize: {
        '3rem': '3rem',
        '2rem': '2rem',
        '1.5rem': '1.5rem',
        '1rem': '1rem',
      },
      transitionTimingFunction: {
        jump: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [],
};