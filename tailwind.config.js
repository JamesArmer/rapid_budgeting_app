/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "red-main": "#F44D71",
        "red-light": "#FF6384",
      },
    },
  },
  plugins: [],
};
