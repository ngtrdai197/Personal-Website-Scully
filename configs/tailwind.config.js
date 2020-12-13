module.exports = {
  prefix: '',
  separator: ':',
  purge: {
    enabled: true, // set true to enable => purge css
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
  theme: {
    screens: {
      /** https://tailwindcss.com/docs/breakpoints */
      /**
       *  'sm': {'min': '640px', 'max': '767px'},
          'md': {'min': '768px', 'max': '1023px'},
          'lg': {'min': '1024px', 'max': '1279px'},
          'xl': {'min': '1280px'},
       */
      xs: '320px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        textColor: 'var(--text-color)',
      },
      boxShadow: {
        common: 'var(--shadow)',
      },
      // position
      inset: {
        '-10': '10px',
        '-15': '15px',
        '-20': '20px',
        '-25': '25px',
      },
    },
  },
}
