/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esta linha é importante para o React/TypeScript
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}