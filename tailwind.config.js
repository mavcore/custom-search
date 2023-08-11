/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  media: false,
    theme: { 
    extend: {},
  },
  plugins: [],
}
