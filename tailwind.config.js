/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage: {
        'warm-radiance': "url('/bg/WarmRadiance.jpeg')",
        'cosmic-twilight': "url('/bg/CosmicTwilight.jpeg')",
        'pastel-stripes': "url('/bg/PastelStripes.jpeg')",
        'misty-mountains': "url('/bg/MistyMountains.jpeg')",
        'spring-gradient-wave': "url('/bg/SpringGradientWave.png')"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

