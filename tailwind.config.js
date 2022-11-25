/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js, jsx, ts, tsx}",
    "./components/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "background-gray": "#F3F5F9"
      },
      maxWidth: {
        '1/2': '50%'
      },
      width: {
        '45': '45%'
      }
    },
  },
  plugins: [],
}
