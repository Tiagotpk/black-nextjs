/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",  // Inclui todos os arquivos relevantes dentro de src
    "./pages/**/*.{js,jsx,ts,tsx}",     // Inclui todos os arquivos dentro de pages
    "./components/**/*.{js,jsx,ts,tsx}",// Inclui todos os arquivos dentro de components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
