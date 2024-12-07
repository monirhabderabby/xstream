/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-bg": "#1A1A1A",
        "color-purple": "#FD088F",
        "color-gray": "#2E2E2E",
      },
      fontFamily: {
        exo: ["var(--font-exo)"],
        play: ["var(--font-play)"],
      },
    },
  },
  plugins: [],
};
