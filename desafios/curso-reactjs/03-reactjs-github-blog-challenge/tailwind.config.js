/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mcn-blue': '#3294F8',
        'mcn-base-title': '#E7EDF4',
        'mcn-base-subtitle': '#C4D4E3',
        'mcn-base-text': '#AFC2D4',
        'mcn-base-span': '#7B96B2',
        'mcn-base-label': '#3A536B',
        'mcn-base-border': '#1C2F41',
        'mcn-base-post': '#112131',
        'mcn-base-profile': '#0B1B2B',
        'mcn-base-background': '#071422',
        'mcn-base-input': '#040F1A',
      },
      gridTemplateColumns: {
        mcn: '10.25rem 1fr;',
      },
      gridTemplateRows: {
        mcn: '10.25rem 1fr;',
      },
    },
  },
  plugins: [],
}
