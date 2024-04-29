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
        'spring-gradient-wave': "url('/bg/SpringGradientWave.png')"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

