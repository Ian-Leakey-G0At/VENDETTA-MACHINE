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
        "primary": "#f4c025",
        "primary-alt": "#d4af37",
        "background-light": "#f8f8f5",
        "background-dark": "#121212",
        "background-dark-alt": "#1a1a1a",
        "background-dark-alt2": "#221e10",
        "background-dark-alt3": "#231e10",
        "content-light": "#333333",
        "content-dark": "#e0e0e0",
        "subtle-light": "#666666",
        "subtle-dark": "#a0a0a0",
        "border-light": "#e5e5e5",
        "border-dark": "#444444",
        "text-accent": "#cbbc90",
        "border-accent": "#493f22",
        "border-accent-alt": "#685a31",
      },
      fontFamily: {
        "display": ["var(--font-space-grotesk)", "sans-serif"],
        "sans": ["var(--font-epilogue)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
