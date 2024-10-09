/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.php',  // Archivos PHP en la raíz del tema
    './template-parts/**/*.php',  // Archivos PHP en la carpeta template-parts
    './inc/**/*.php',  // Archivos PHP en la carpeta inc
    './assets/js/**/*.js',  // Archivos JS en la carpeta assets/js
    './src/blocks/**/*.{js,jsx,ts,tsx}',  // Bloques que están en src/blocks
    './src/**/*.php',  // Incluye archivos PHP dentro de src si los hay
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
