module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
