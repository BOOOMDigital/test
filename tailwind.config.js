/** @type {import('tailwindcss').Config} */

const globalStyles = ({ addBase, config }) => {
  addBase({
    'ol, ul': { paddingLeft: config('theme.padding.4') },
    ol: { listStyleType: 'decimal' },
    ul: { listStyleType: 'disc' },
  });
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway'],
      },
      fontSize: {
        '5xl': '84px',
        '4xl': '40px',
        '3xl': '30px',
        '2xl': '20px',
        'xl': '18px',
      },
      lineHeight: {
        heading: '1.05',
      },
      colors: {
        darktone: '#2D3E4E',
        highlight: '#EFEFEF',
        blue: '#98B7B9',
        green: '#9FB998',
        orange: '#E19F50',
        grey: '#57636E',
        // misc
        'blue-highlight': '#57636E',
        text: '#20303E',

      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1225px',
        },
      },
      padding: {
        'inner-container': '5.5rem',
      },
      boxShadow: {
        'button': '0px 3px 6px rgba(0, 0, 0, 0.16)',
        'input-shadow': '0px 1px 2px rgba(0, 0, 0, 0.16)',
      },
      height: {
        'small': '333px',
        'medium': '450px',
        'large': '590px',
      },

    },
  },
  plugins: [globalStyles],
}
