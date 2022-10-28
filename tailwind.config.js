/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      pblack: "#000000",
      pdarkgreen: "#393D3B",
      secondary: "#D9D9D9",
      primary: "#F6F5ED",
      pteal: "#61B2E4",
    },
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fontFamily: {
      serif: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
