import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "var(--midnight)",
        navy: "var(--navy)",
        "blue-deep": "var(--blue-deep)",
        "blue-sky": "var(--blue-sky)",
        "blue-light": "var(--blue-light)",
        amber: "var(--amber)",
        "amber-deep": "var(--amber-deep)",
        "amber-light": "var(--amber-light)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        snow: "var(--snow)",
        cream: "var(--cream)",
        stone: "var(--stone)",
        "stone-dark": "var(--stone-dark)",
        earth: "var(--earth)",
      },
      fontFamily: {
        display: "var(--font-display)",
        accent: "var(--font-accent)",
        body: "var(--font-body)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      maxWidth: {
        container: "1200px",
        "container-narrow": "800px",
        "container-wide": "1400px",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
