/**@type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "../app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",

    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121214',
        secondary: '#202024',
      }
    },
  },
  plugins: [],
}