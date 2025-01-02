/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#f9e4bc",
        "secondary": "#ffa500",
        "tertiary" : "#000000",
      }
    },
  },
  plugins: [],
}

