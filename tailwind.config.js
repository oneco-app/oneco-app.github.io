/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'actor': ["Actor"],
        'inter': ["Inter"],
        'arial': ["Arial"],
        'calibri': ["Calibri"]
      },
      colors: {
        'eco-green': {
          DEFAULT: '#16FD0B',
        },
        'eco-white': {
          DEFAULT: '#FFFFFF',
        },
        'eco-dark': {
          DEFAULT: '#000044'
        },
        'eco-purple': {
          DEFAULT: '#0000DE'
        }
      }
    },
  },
  plugins: [],
}
