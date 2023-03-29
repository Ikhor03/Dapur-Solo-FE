/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/public/dapurSoloHero.png')",
        'home-texture': "url('/public/bg.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}