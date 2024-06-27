/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1200px",
          xl: "1200px",
          "2xl": "1200px",
        },
      }
    },
  },
  plugins: [],
};
