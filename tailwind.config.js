// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1B2352",
        orange: "#E9624E",
        yellow: "#EAA023",
        beige: "#FFFEE2",
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        sansita: ['Sansita', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '900' }], // Heading 1
        'h2': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }], // Heading 2
        'h3': ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }], // Heading 3
        'bold': ['1rem', { lineHeight: '1.5rem', fontWeight: '700' }], // Bold text
        'text': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // Regular text
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
