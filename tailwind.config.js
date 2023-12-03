/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html"],
  theme: {
    extend: {},
    screens: {
      sm:"400px",
      md:"600px",
      lg:"800px",
      xl:"1100px",
      "2xl": "1380px",
    }
  },
  plugins: [],
}

