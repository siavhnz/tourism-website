/** @type {import('tailwindcss').Config} */
import { values } from "./tailwind.rewrite";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...values,
      backgroundImage: {
        "mobile-pattern": "url('./assets/home/background-home-mobile.jpg')",
        "tablet-pattern": "url('./assets/home/background-home-tablet.jpg')",
        "desktop-pattern": "url('./assets/home/background-home-desktop.jpg')",
      },
      fontFamily: {
        "barlow-condensed": ["'Barlow Condensed'", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "serif"],
      },
      colors: {
        "light-blue": "#D0D6F9",
        "very-dark-blue": "#0B0D17",
      },
    },
  },
  plugins: [],
};
