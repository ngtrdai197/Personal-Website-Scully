module.exports = {
  prefix: '',
  separator: ':',
  purge: {
    enabled: true, // set true to enable => purge css
    content: ['./src/**/*.html', './src/**/*.ts'],
  },
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'time-line-right': 'var(--time-line-right)',
        'time-line-left': 'var(--time-line-left)',
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
        '-30': '30px',
        '-35': '35px',
        '-50': '50px',
        '-55': '55px',
        '-center': '50%',
      },
    },
  },
}
