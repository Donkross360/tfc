/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E6EAF2',
          100: '#C2CAE0',
          200: '#99A9CB',
          300: '#7088B8',
          400: '#476AA3',
          500: '#1A2A57', // primary navy
          600: '#152246',
          700: '#111B36',
          800: '#0C1426',
          900: '#060A15',
        },
        gold: {
          50: '#FBF7E9',
          100: '#F6ECC8',
          200: '#ECD799',
          300: '#E4C470',
          400: '#DCB348',
          500: '#D4AF37', // primary gold
          600: '#B28F20',
          700: '#8F7218',
          800: '#6B5511',
          900: '#483909',
        },
        warmGray: {
          50: '#FAF9F7',
          100: '#F5F2EB',
          200: '#E8E2D5',
          300: '#D5CAB6',
          400: '#BFB097',
          500: '#A99878',
          600: '#8C7C5E',
          700: '#6E6248',
          800: '#514932',
          900: '#33301F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};