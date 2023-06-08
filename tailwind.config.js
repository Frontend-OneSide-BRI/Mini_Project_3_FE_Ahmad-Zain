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
      backgroundImage: {
        herohome:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/f511e96e-c4cd-49b1-9fbf-ca9d78e15b50/ID-en-20230529-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
      },
    },
  },
  plugins: [],
};
