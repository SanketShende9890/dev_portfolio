/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
      heading: ["Inconsolata"]
    },
    colors: {
      'bg-from': '#01001A',
      'cta-color':  '#44C9B0',
      'cta-hover':  '#08A88A',
      'gray': '#231F20',
      'mute-gray': '#2d2e32',
      'white': '#fff',
      'bg-to': 'rgb(16, 32, 68)'
    }
  },
  plugins: [],
}

