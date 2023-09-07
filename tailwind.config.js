/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      off_white: "hsl(0, 1%, 44%)",
      light_grey: "hsl(0, 0%, 86%)",
      smoke_grey: "hsl(0, 1%, 44%)",
      off_black: "hsl(0, 0%, 8%)",
      purple:"hsl(259, 100%, 65%)",
      light_red: "hsl(0, 100%, 67%)",
      white:"hsl(0, 0%, 100%)"
    }
  },
  plugins: [],
}

