module.exports = {
  prefix: '',
  separator: ':',
  theme: {
    screens: {
      /** https://tailwindcss.com/docs/breakpoints */
      /**
       *  'sm': {'min': '640px', 'max': '767px'},
          'md': {'min': '768px', 'max': '1023px'},
          'lg': {'min': '1024px', 'max': '1279px'},
          'xl': {'min': '1280px'},
       */
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      indigo: {
        lighter: '#b3bcf5',
        default: '#5c6ac4',
        dark: '#202e78',
      }
    }
  },
}
