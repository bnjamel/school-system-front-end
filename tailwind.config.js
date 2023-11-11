/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        100: "#A0C0E3",
        200: "#90B5DF",
        300: "#81AADA",
        400: "#71A0D6",
        500: "#5B91D0",
      },
      pink: {
        100: "#F3A5C7",
        200: "#F093BC",
        300: "#EE81B0",
        400: "#EB6FA5",
        500: "#E95F9B",
      },
      orange: {
        100: "#FEF4EC",
        200: "#FDE9D8",
        300: "#FCDFC5",
        400: "#FBD4B1",
        500: "#FAC394",
      },
      light: {
        100: "#EFF5FA",
        200: "#E0ECF5",
        300: "#D1E2F0",
        400: "#C1D8EB",
        500: "#B2CFE6",
      },
      dark: {
        100: "#3F4650",
        200: "#363C45",
        300: "#2D3239",
        400: "#24282D",
        500: "#1B1E22",
      },
    },
    extend: {
      fontFamily: {
        cairoRegular: ["cairo-regular", "monospace"],
        cairoSemiBold: ["cairo-semibold", "monospace"],
        cairoBold: ["cairo-bold", "monospace"],
      },
    },
  },
  plugins: [],
});
