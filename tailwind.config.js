/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      position: "relative",
      height: "50vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      scrollSnapAlign: "start",
      textAlign: "right",
    },
    extend: {
      gridTemplateColumns: {
        20: "repeat(25, minmax(0, 1fr))",
      },
      colors: {
        color_background: "var(--color-background)",
        color_primary: "var(--color-primary)",
        color_primary_dark: "var(--color-primary-dark)",
        color_secondary: "var(--color-secondary)",
        color_secondary_dark: "var(--color-secondary-dark)",
        color_border_grid: "var(--color-border-grid)",
      },
    },
  },
  plugins: [],
};
