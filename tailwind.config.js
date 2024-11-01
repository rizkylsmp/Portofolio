/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        "color-1": "#f0f0f0",
        "color-2": "#858384",
        "color-4": "#282828",
        "color-3": "#141414",
        "color-5": "#080708",
      },
      backgroundColor: {
        "color-1": "#f0f0f0",
        "color-2": "#858384",
        "color-4": "#282828",
        "color-3": "#141414",
        "color-5": "#080708",
      },
      borderColor: {
        "color-1": "#C6C5C5",
        "color-2": "#858384",
        "color-4": "#282828",
        "color-3": "#141414",
        "color-5": "#080708",
      },
      fontFamily: {
        poppins: ["'Poppins'"],
      },
    },
  },
  plugins: [],
};
