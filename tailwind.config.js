/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bold: ["GeneralSans-Bold", "sans-serif"],
        BoldItalic: ["GeneralSans-BoldItalic", "sans-serif"],
        ExtraLight: ["GeneralSans-Extralight", "sans-serif"],
        Light: ["GeneralSans-Light", "sans-serif"],
        LightItalic: ["GeneralSans-LightItalic", "sans-serif"],
        Medium: ["GeneralSans-Medium", "sans-serif"],
        Regular: ["GeneralSans-Regular", "sans-serif"],
        SemiBold: ["GeneralSans-SemiBold", "sans-serif"],
        SemiBoldItalic: ["GeneralSans-SemiBoldItalic", "sans-serif"],
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
