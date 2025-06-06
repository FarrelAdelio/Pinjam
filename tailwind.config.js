 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary1: "#ffe374",
        primary2: "#151f28",
      },
      fontFamily: {
        poppins: "Poppins"
      },
      width: {
        imageLogin: "360px",
        70: "70%"
      }
    },
  },
  plugins: [],
}