/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-flix": "#e50914",
        "red-dark": "#c11119",
        "red-darker": "#99161d",
        "blue-download": "#0071eb",
      },
    },
  },
  plugins: [],
};
