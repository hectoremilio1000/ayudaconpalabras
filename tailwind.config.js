// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.463rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        primary:   "#FF6B00", // Naranja principal
        primaryLt: "#FFA94D", // Naranja claro
        secondary: "#0A66FF", // Azul acento
        darkHero:  "#002A6E", // Fondo hero
        textMain:  "#2E2E32", // Copys
        cta:       "#0BBF3C", // Verde donación
      },
      backgroundImage: {
        "orange-sky": "linear-gradient(135deg,#FF6B00 0%,#FFA94D 100%)",
      },
      fontFamily: { sans: ["Montserrat", "sans-serif"] },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
