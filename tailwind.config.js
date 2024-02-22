/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#FBD784",
      },
      fontFamily: {
        primary: ['"Lato"'],
        secondary: ['"Cormorant Garamond"'],
      },
    },
  },
  plugins: [],
};
