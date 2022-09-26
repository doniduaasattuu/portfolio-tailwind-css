/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#84cc16",
        dark: "#0f172a",
      },
      screens: {
        sm: "600px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
