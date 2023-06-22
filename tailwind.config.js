/** @type {import('tailwindcss').Config} */
import { values } from "./tailwind.rewrite";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...values,
      backgroundImage: {
        "mobile-home-pattern":
          "url('./assets/home/background-home-mobile.jpg')",
        "tablet-home-pattern":
          "url('./assets/home/background-home-tablet.jpg')",
        "desktop-home-pattern":
          "url('./assets/home/background-home-desktop.jpg')",
        "mobile-destination-pattern":
          "url('./assets/destination/background-destination-mobile.jpg')",
        "tablet-destination-pattern":
          "url('./assets/destination/background-destination-tablet.jpg')",
        "desktop-destination-pattern":
          "url('./assets/destination/background-destination-desktop.jpg')",
        "mobile-crew-pattern":
          "url('./assets/crew/background-crew-mobile.jpg')",
        "tablet-crew-pattern":
          "url('./assets/crew/background-crew-tablet.jpg')",
        "desktop-crew-pattern":
          "url('./assets/crew/background-crew-desktop.jpg')",
        "mobile-technology-pattern":
          "url('./assets/technology/background-technology-mobile.jpg')",
        "tablet-technology-pattern":
          "url('./assets/technology/background-technology-tablet.jpg')",
        "desktop-technology-pattern":
          "url('./assets/technology/background-technology-desktop.jpg')",
      },
      fontFamily: {
        "barlow-condensed": ["'Barlow Condensed'", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "serif"],
      },
      colors: {
        "light-blue": "#D0D6F9",
        "very-dark-blue": "#0B0D17",
        "dark-blue": "#383B4B",
      },
    },
  },
  plugins: [],
};
