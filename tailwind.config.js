/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'lg': 'shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]',
      }
    },
  },
  plugins: [],
}

