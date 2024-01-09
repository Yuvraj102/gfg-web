module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        blue_gray: { 300: "#9ba4b5", "300_7f": "#9ba4b57f" },
        gray: { 100: "#f1f6f9", 800: "#393e46", 900: "#222222" },
        green: { 700: "#2f8d46", "700_cc": "#2f8d46cc" },
        orange: { 800: "#c68301" },
        cyan: { 50: "#e0fff8" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", outfit: "Outfit" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#2f8d46,#e0fff8)",
        gradient1: "linear-gradient(180deg ,#000000,#ffffff)",
        gradient2: "linear-gradient(320deg ,#e0fff8,#2f8d46)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
