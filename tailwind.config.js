/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080d0b",
        panel: "#101815",
        line: "#1e2b25",
        muted: "#8c9b92",
        mint: "#70f0b0"
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        mono: ["DM Mono", "monospace"]
      }
    }
  },
  plugins: []
}
