/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":["#92DEFF"],
        "secondary":["#06B0F9"]
      }
    },
  },
  plugins: [],
}

