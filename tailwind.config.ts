import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316',
          'orange-dark': '#EA6A0A',
          dark: '#0A0A0A',
          light: '#FFF7F0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'orange-sm': '0 4px 14px rgba(249,115,22,0.25)',
        'orange-md': '0 8px 30px rgba(249,115,22,0.35)',
      },
    },
  },
  plugins: [],
}
export default config