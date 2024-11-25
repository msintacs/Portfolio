module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1d809f",
      },
      fontFamily: {
        "ink-lipquid": ["InkLipquid", "sans-serif"],
        "yg-jalnan": ["yg-jalnan", "sans-serif"],
        "SUIT-Regular": ["SUIT-Regular", "sans-serif"],
        "SUIT-Heavy": ["SUIT-Heavy", "sans-serif"],
        "Ownglyph_UNZ-Rg": ["Ownglyph_UNZ-Rg", "Ownglyph_UNZ-Rg"],
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
      },
      animation: {
        slide: "slide 10s linear infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(45deg, #ff00cc, #3333ff)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
