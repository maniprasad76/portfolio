/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFAF3",
        accent: "#F62440",
        dark: "#1B1B1B",
        cream: "#FFFAF3",
        crimson: "#F62440",
        charcoal: "#1B1B1B",
      },
      fontFamily: {
        sans: ["Satoshi", "Inter", "sans-serif"],
        display: ["Clash Display", "sans-serif"],
        signature: ['"Dancing Script"', "cursive"],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
