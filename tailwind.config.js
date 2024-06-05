/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
          'mygra':"linear-gradient(to right,#EC8A91,#B175D6)",
      }
     },
  },
  plugins: [],
}

