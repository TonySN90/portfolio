/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        20: "repeat(25, minmax(0, 1fr))",
      },
      colors: {
        color_background: "#181818",
        color_primary: "#0aff9d",
        color_primary_dark: "#0aff9da5",
        color_border_grid: "#1e1e1e",
      },
    },
  },
  plugins: [],
};
