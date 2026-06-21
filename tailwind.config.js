/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#b76e79',
        'soft-pink': '#ffd1dc',
        'cream': '#fdfbf7',
        'gold': '#d4af37',
        'dark-bg': '#1a1818',
        'dark-surface': '#2a2626'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
