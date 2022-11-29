/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    colors:{
      'gray': '#D9D9D9',
      'light-blue': '#284B63',
      'light-dark': '#353535',
      'dark': '#1E1E1E'
    },
    extend: {
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          '40%': {
            transform: 'translateY(-30px)'
          },
          '60%': {
            transform: 'translateY(-15px)'
          }
        },
        widthHover: {
          '0%': {
            width: "0%"
          },
          '50%': {
            width: "50%"
          },
          "100%": {
            width: "70%"
          }
        },
        pageLoad: {
          'from': {
            opacity: '0'
          },
          'to': {
            opacity: '1'
          }
        }
      }
    },
    animation: {
      'bounce': 'bounce 2s infinite',
      'hoverLinks': 'widthHover 300ms linear',
      'pageLoad': 'pageLoad 1s',
    }
  },
  plugins: [],
}
