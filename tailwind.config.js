/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        green: "var(--color-green)",
        lightGreen: "var(--color-light-green)",
        lightGray: "var(--color-light-gray)",
        lightWhite: "var(--color-light-white)",
        lightBlack: "var(--color-light-black)",
      },
      textColor: {
        green: "var(--color-green)",
        lightGreen: "var(--color-light-green)",
        lightGray: "var(--color-light-gray)",
        lightWhite: "var(--color-light-white)",
        lightBlack: "var(--color-light-black)",
      },
      borderColor: {
        green: "var(--color-green)",
        lightGreen: "var(--color-light-green)",
        lightGray: "var(--color-light-gray)",
        lightWhite: "var(--color-light-white)",
        lightBlack: "var(--color-light-black)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
