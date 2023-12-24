/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    fontSize: {
      xs: ["0.7em", "8px"],
      sm: ["0.875rem", "12px"],
      base: ["clamp(0.875rem, 1.5vw, 1.5rem)", "19.5px"],
      lg: ["clamp(1rem, 2vw, 2rem)", "21.94px"],
      xl: ["clamp(1.25rem, 2.5vw, 2.5rem)", "24.38px"],
      "2xl": ["clamp(1.5rem, 3vw, 3rem)", "29.26px"],
      "3xl": ["clamp(2rem, 3vw, 5rem)", "30px"],
      "normal": ["16px", "20px"],
      "large": ["20px", "24px"],
      "6xl":["70px", "56px"]
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },
      boxShadow: {
        "shadow-1":
          " 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "shadow-2":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1),  0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "shadow-3":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "shadow-4":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1),  0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        sm: "0.25rem",
      },
      colors: {
        indigo: {
          100: "#e2d9f3",
          200: "#c5b3e6",
          300: "#a98eda",
          400: "#8c68cd",
          500: "#6f42c1",
          600: "#59359a",
          700: "#432874",
          800: "#2c1a4d",
          900: "#160d27",
        },
        blue: {
          100: "#cce5ff",
          200: "#99caff",
          300: "#66b0ff",
          400: "#3395ff",
          500: "#007bff",
          600: "#0062cc",
          700: "#004a99",
          800: "#003166",
          900: "#001933",
        },
        grey : {
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        "background": "#f5f1fc",
        "grey-50": "#f8sfafc",
        "black": "#222",
        "white": "#fff",
        "red-light": "#f8d7da",
        "red-dark": "#842029",
        "green-light": "#d1e7dd",
        "green-dark": "#0f5132",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1000px",
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
