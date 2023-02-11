

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Vazir"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy:"class"
    })
  ],
}