/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        lyt: "#5B5B5B",
        kblue: "#22A9D3",
        kgreen: "#046A64",
        kpurple: "#782E93",
       
      }
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1280px",
      }
    }
  },
  plugins: [],
}