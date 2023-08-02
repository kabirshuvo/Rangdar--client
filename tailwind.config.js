/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: '1440px'
      },
      colors: {
        rangDaru_light: '#232f3e',
        rangDaru_blue: 'febd69',
        whiteText: '#fff',
        lightText: '#ccc',
        quantity_box: '#fof2f2',
        footerBottom: '#131a22'
      },
      boxShadow: {
        textShadow: '0px 0px 32px 1px rgba(199, 199, 199, 1)',
        rangDaruInput: '0 0 3px 2px rgb(228 121 17 / 50%)',
      },
      screens: {
        xs: '320',
        sm: '375',
        sml:'500px',
        md: '667px',
        mdl:'768px',
        lg: '960px',
        lgl:'1024px',
        xl: '1280px',
        xxl:'1536px',
      },
      fontFamily:{
        titleFont: 'Roboto',
        bodyFont: 'Poppins',
      },
    },
  },
  plugins: [],
}

