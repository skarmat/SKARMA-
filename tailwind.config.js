/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"], // Watches HTML and JS files
  theme: {
    extend: {
      colors: {
        skarma: {
          bg: "#05070a" /* Deepest Black/Blue */,
          dark: "#0B0D17" /* Midnight */,
          card: "#11131F" /* Slightly lighter for cards */,
          gold: "#D4AF37" /* Muted Gold */,
          silver: "#E2E8F0" /* Starlight White */,
          accent: "#C27856" /* Earthy Terracotta */,
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "slow-zoom": "zoom 20s infinite alternate",
        twinkle: "twinkle 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
