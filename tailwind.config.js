/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Samsung Sans"',
          "Inter",
          "Noto Sans KR",
          "IBM Plex Sans",
          "Urbanist",
          "sans-serif",
        ],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(2rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
      },
    },
    screens: {
      xsm: "575px",
      sm: "680px",
      md: "768px",
      xmd: "895px",
      lg: "1076px",
      xl: "1440px",
      "2xl": "1567px",
      "2lg": "1200px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE 및 Edge용 */,
          "scrollbar-width": "none" /* Firefox용 */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, Opera용 */,
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
