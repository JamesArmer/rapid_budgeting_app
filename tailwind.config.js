/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "pink-main": "#F44D71",
        "pink-light": "#FF6384",
        "blue-main": "#36A2EB",
        "green-main": "#5CC25A",
        "green-light": "#10BD21",
        "red-main": "#BD1A10",
        "red-light": "#DF3600",
        "yellow-main": "#FFC90C",
        "yellow-dark": "#BD9710",
      },
    },
  },
  plugins: [],
};
