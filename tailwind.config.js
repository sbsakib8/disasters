/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        onest: ['Onest', 'serif'],
      },
      colors: {
        primary: '#F26922',
        secondary: '#F4F4F5',
        navber: '#E4E4E7',
        blackColor: '#09090B',
        paragraphColor:'#71717A'
       
      },
      
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

