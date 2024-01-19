/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1030px",
        wide: "1440px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      }, 
      fontSize: {
        xs: ["0.7em", "8px"],
        sm: ["0.875rem", "12px"],
        base: ["clamp(0.875rem, 1.5vw, 1.5rem)", "19.5px"],
        lg: ["clamp(1.5rem, 2vw, 2.5rem)", "21.94px"],
        xl: ["clamp(1.25rem, 2.5vw, 2.5rem)", "24.38px"],
        "2xl": ["clamp(1.5rem, 3vw, 3rem)", "29.26px"],
        "3xl": ["clamp(2rem, 3vw, 5rem)", "30px"],
        "normal": ["16px", "20px"],
        "large": ["20px", "24px"],
        "6xl":["64px", "56px"]
      },
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
}