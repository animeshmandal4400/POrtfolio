/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#191a19",
        "bg-variant": "#1E5128",
        "bg-variant-dark": "#262726",
        primary: "#4E9F3D",
        "primary-variant": "#D8E9A8",
        white: "#fff",
        light: rgba(255, 255, 255, 0.6),
      },
      fontFamily: {
        playfair: ["playfair Display", "serif"],
      },
      content: {},
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1480px",
    },
  },
  plugins: [],
};
