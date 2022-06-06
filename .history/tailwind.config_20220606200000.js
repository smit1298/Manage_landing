module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"

    }
    extend: {
      colors:{
        brightRed: 'hs'(12, 88% )
      }
    },
  },
  plugins: [],
}
