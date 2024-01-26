/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      dropShadow: {
        "glow-md": [
          "0 0px 4px rgba(255,255, 255, 0.35)",
          "0 0px 4px rgba(255, 255,255, 0.2)",
        ],
        "glow-sm": [
          "0 0px 2px rgba(255,255, 255, 0.35)",
          "0 0px 2px rgba(255, 255,255, 0.2)",
        ],
      },
    },
  },
  plugins: [],
  corePlugins: {
    animation: false,
  },
};
