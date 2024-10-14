/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          calculatorBG: "url(../public/gradientbackground.jpg)",
          earth: 'url(../public/earth.jpg)',
          signupBg: 'url(../public/signupBg.jpg)'
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width'
      },
      fontFamily: {
        'orbitron': ['orbitron', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
}
