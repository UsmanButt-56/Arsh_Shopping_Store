/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '80': '20rem', // Add 60 to the spacing scale
      },
    },
  },
  plugins: [],
}

