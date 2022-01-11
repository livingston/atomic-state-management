const colors = require('tailwindcss/colors');

module.exports = {
  content: ['src/**/*.html', 'src/**/*.js', 'src/**/*.jsx'],
  darkMode: 'media',
  theme: {
    colors: {
      gray: colors.gray,
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
