/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "dog1-bg": "url('/src/assets/image-1.png')",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        mono: 'monospace'
      },
      colors: {
        gray: {
          800: "#333333"
        },
        red: {
          500: "#F73F52",
          700: "#AB0718"
        },
        yellow: {
          200: "#FFF3BB",
          300: "#FFEC8F",
          400: "#FFE66B",
          500: "#EED247",
          600: "#D5B51D",
        },
      },
    },
  },
  plugins: [],
}
