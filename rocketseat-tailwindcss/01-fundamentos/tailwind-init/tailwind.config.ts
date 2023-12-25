import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        mcn: "#8257e5"
      }
    },
  },
  plugins: [],
}
export default config
