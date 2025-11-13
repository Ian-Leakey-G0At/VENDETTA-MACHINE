import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0B12',
        surface: '#17141C',
        primary: '#E054F7',
        secondary: '#00A3FF',
        'text-primary': '#F2F2F2',
        'text-secondary': '#A3A3A3',
        border: '#2A2730',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #E054F7 0%, #00A3FF 100%)',
      },
      fontFamily: {
        "display": ["var(--font-poppins)", "sans-serif"],
        "sans": ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
