/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "sfr-",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c3791",
        secondary: "#2C2447",
        tertiary: "#1B1F24",
      },
    },
  },
  plugins: [],
};
