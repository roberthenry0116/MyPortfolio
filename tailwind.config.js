/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'Bradley' :['Bradley Hand ITC', 'ui-monospace'],
      'Mistral' : ['Mistral', 'ui-monospace'],

    }
  },
  plugins: [],
}