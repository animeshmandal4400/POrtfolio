/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#191A19",
        "bg-variant": "#1E5128",
        "bg-variant-dark": "#262726",
        primary: "#4E9F3D",
        "primary-variant": "#D8E9A8",
        white: "#fff",
      },
      fontFamily: {
        playfair: ["playfair Display", "serif"],
        firaCode: ["Fira Code", "monospace"],
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
