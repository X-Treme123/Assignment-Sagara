/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      InterBold: ["Inter-Bold", "sans-serif"],
    },
    extend: {
      colors: {
        customRed: "rgb(165,21,53,1)",
      },
    },
  },
  plugins: [],
}

