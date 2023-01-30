/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./assets/js/main.js"],
  theme: {
    extend: {
      inset: {
        100: "100%",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        wiggle: "wiggle 0.3s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0.3 },
          "100%": { opacity: 1 },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      }),
    },
  },
  plugins: [],
};
