/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Add Inter as a font option
        lato: ["Lato"],
      },
      screens: {
        "xl-custom": "1350px", // Custom breakpoint for 1450px
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
