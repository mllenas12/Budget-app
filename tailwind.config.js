/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']

      }
    },
  },
  daisyui: {
    themes: ["cmyk"],
  },
  plugins: [require("daisyui")]
}

