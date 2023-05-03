/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/modules/*/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-navy": { DEFAULT: "#020c1b" },
        "theme-navy": { DEFAULT: "#0a192f" },
        "light-navy": { DEFAULT: "#112240" },
        "lightest-navy": { DEFAULT: "#233554" },
        "navy-shadow": { DEFAULT: "rgba(2,12,27,0.7)" },
        "dark-slate": { DEFAULT: "#495670" },
        slate: { DEFAULT: "#8892b0" },
        "light-slate": { DEFAULT: "#a8b2d1" },
        "lightest-slate": { DEFAULT: "#ccd6f6" },
        white: { DEFAULT: "#e6f1ff" },
        green: { DEFAULT: "#64ffda" },
        "green-tint": { DEFAULT: "rgba(100,255,218,0.1)" },
        pink: { DEFAULT: "#f57dff" },
        blue: { DEFAULT: "#57cbff" },
      },
      fontFamily: {
        apple: ["Calibre", "Inter", "San Francisco", "SF Pro Text"],
        mango: [
          "SF Mono",
          "Fira Code",
          "Fira Mono",
          "Roboto Mono",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
