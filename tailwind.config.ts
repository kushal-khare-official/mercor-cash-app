import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/rays.svg')",
        'payments-pattern': "url('./assets/images/payments.svg')",
        'banking-pattern': "url('./assets/images/banking.svg')",
        'boost-pattern': "url('./assets/images/boost.svg')",
        'investing-pattern': "url('./assets/images/investing.svg')",
      },
      colors: {
        'cash-app-green': '#00D54B',
        'grey': '#b6b6b6',
      },
      fontFamily: {
        sans: ['var(--font-mulish)'],
      },
    },
  },
  plugins: [],
}
export default config
