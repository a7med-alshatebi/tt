/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {

    
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontSize: {/*If you change the size if one compnent all the sizes on the screen will change so it must all stay or all change manually*/ 
        base: '18px',
      },
      margin: {
        4: "25px",
        3: "25px",
      },
      colors: {
      vuejs: {
        light: '#42b883',
        DEFAULT: '#35495e',
        dark: '#273849',
      }
    }
}
  },
  plugins: [],
}

