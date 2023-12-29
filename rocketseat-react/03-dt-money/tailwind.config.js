/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        dt: '0 0 0 2px rgb(34 197 94)',
      },
      fontSize: {
        dt: '1rem',
      },
      gridTemplateColumns: {
        dt: 'repeat(3, 1fr)',
      },
    },
  },
  plugins: [],
}
