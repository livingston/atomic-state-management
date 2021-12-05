const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['src/**/*.html', 'src/**/*.js', 'src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      white: colors.white,
      green: colors.green
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
    require('tailwindcss-debug-screens')
  ]
};
