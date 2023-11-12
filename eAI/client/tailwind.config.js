/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontSize: {
      xs: ["12px", "10px"],
      sm: ["14px", "14px"],
      base: ["16px", "16px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["32px", "40px"],
      "4xl": ["48px", "58px"],
      "8xl": ["52px", "62px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
        generalsans: ["GeneralSans", "sans-serif"],
        "generalsans-100": ["GeneralSans-100", "sans-serif"],
        "generalsans-400": ["GeneralSans-400", "sans-serif"],
        "generalsans-600": ["GeneralSans-600", "sans-serif"],
        brfirma:["Brfirma", "sans-serif"],
        "brfirma-100": ["Brfirma-100", "sans-serif"],
        "brfirma-400": ["Brfirma-400", "sans-serif"],
        "brfirma-600": ["Brfirma-600", "sans-serif"],
      },
      colors: {
        purple: "#7B61FF",
        black: "#1e1e1e",
        grey: "#DEDBE9",
        "slate-grey": "#515251",
        "opaque-black": "rgba(0, 0, 0, 0.35)",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs:"480px",
        ss: "620px",
        sm: "768px",
        mm: "1000px",
        md: "1060px",
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
