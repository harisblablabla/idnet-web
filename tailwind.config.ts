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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          200: '#6894DE',
          300: '#477CD7',
          400: '#2C66C9',
          DEFAULT: '#2352A1',
          600: '#1D4486',
          700: '#163364',
          800: '#0F2243',
        },
        secondary: {
          200: '#BADFF2',
          300: '#98CEEB',
          400: '#76BEE5',
          DEFAULT: '#47A7DC',
          600: '#319ED8',
          700: '#2487BC',
          800: '#1D6F9A',
        },
        third: {
          DEFAULT: '#D1345B'
        },
        bgc: {
          '2': '#F2F6FA'
        }
      },
      height: {
        "25v": "25vh",
        "50v": "50vh",
        "75v": "75vh",
        "80v": "80vh"
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
