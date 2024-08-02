/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        "3xs": "0.5625rem",
        "2xs": "0.625rem",
        md: "1rem",
      },
      colors: {
        success: {
          500: "#1DD27A",
        },
        error: {
          500: "#FD4B4B",
        },
        warning: {
          500: "#d97706",
        },
        primary: {
          100: "#B0E9D3",
          200: "#C3F0DE",
          300: "#D6F7E9",
          400: "#00BC8D",
          500: "#00A77D",
          600: "#00926D",
          700: "#007D5D",
          800: "#00684D",
          900: "#00533D",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: "class",
};
