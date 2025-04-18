module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1d809f",
      },
      screens: {
        "3xl": "1920px",
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
        bounce: "bounce 1s ease-in-out infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(25px)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(45deg, #ff00cc, #3333ff)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
