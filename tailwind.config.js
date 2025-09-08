/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2e7d32",
        accent: "#f59e0b",
        accent2: "#fb923c",
        ink: "#0f172a",
        paper: "#fffefb",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
};