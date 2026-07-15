/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dbe7fe",
          200: "#bfd4fe",
          300: "#93b6fd",
          400: "#608df9",
          500: "#3d68f3",
          600: "#2749e8",
          700: "#2138d1",
          800: "#2230a8",
          900: "#212e84",
          950: "#161b52",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        ink: {
          900: "#05060f",
          800: "#0a0d1f",
          700: "#10142b",
        },
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(124,58,237,0.25) 0%, rgba(61,104,243,0.12) 40%, rgba(0,0,0,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124,58,237,0.45)",
        card: "0 4px 24px -6px rgba(0,0,0,0.15)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        blob: "blob 10s infinite ease-in-out",
        float: "float 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
    },
  },
  plugins: [],
};
