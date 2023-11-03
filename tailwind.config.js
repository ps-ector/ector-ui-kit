/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "checked-pattern": "url('src/assets/check.svg')",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#47D7AC",

          secondary: "#11121F",

          accent: "#47D7AC",

          neutral: "#2a323c",

          "base-100": "#302F34",

          info: "#3abff8",

          success: "#47D7AC",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
};
