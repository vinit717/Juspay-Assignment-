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
        "custom-blue-2": "#e5ecf6"
      }
    },
  },
  plugins: [],
}

