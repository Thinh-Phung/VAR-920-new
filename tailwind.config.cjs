/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
    extend: {
      backgroundImage: {
        welcome: "url('../assets/home-page/welcome.png')"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
}
