/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,scss,ts}"],
  safelist: ["text-primary", "text-secondary"],
  theme: {
    extend: {
      colors: {
        primary: "#002d7e",
        secondary: "#328f34",
        background: "#f2f7f2",
      },
    },
  },
  plugins: [],
};
