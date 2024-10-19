/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"
],
darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "custom-black": "#1a1a1a",
        "custom-blue-1": "#e3f5ff",
        "custom-blue-2": "#e5ecf6",
        "lightwhite": "#f7f9fb",
        "lightblue-300": "#a8c5da",
        "custom-grey-1": "#1c1c1c66",
        "custom-grey-2": "#fff6",
        "custom-purple": "#c6c7f8"
      }
    },
  },
  plugins: [],
}

