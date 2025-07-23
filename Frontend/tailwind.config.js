// tailwind.config.js or .mjs

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};

export default config;
