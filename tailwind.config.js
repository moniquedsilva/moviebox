module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        bg: '#00000080',
      },
      fontFamily: {
        DM: "'DM Sans', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
