/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {     
      colors: {        
        text: {
          DEFAULT: "#D8E9E8",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#F2F8F7",
          500: "#D8E9E8",
          600: "#B4D5D3",
          700: "#90C1BE",
          800: "#6CACA9",
          900: "#51908C",
          950: "#477E7A",
        },
        primary: {
          DEFAULT: "#47D7AC",
          50: "#CBF4E8",
          100: "#BCF0E1",
          200: "#9FEAD4",
          300: "#82E4C6",
          400: "#64DDB9",
          500: "#47D7AC",
          600: "#2AC194",
          700: "#219774",
          800: "#186D54",
          900: "#0F4334",
          950: "#0A2E24",
        },
        secondary: {
          DEFAULT: "#11121F",
          50: "#21233D",
          100: "#1F2139",
          200: "#1C1D33",
          300: "#181A2C",
          400: "#151626",
          500: "#11121F",
          600: "#0D0E18",
          700: "#0A0A12",
          800: "#06070B",
          900: "#030305",
          950: "#010101",
        },
        tertiary: {
          DEFAULT: "#302F34",
          50: "#8A8893",
          100: "#7F7D89",
          200: "#6B6974",
          300: "#58565F",
          400: "#444249",
          500: "#302F34",
          600: "#2B2A2F",
          700: "#262529",
          800: "#212024",
          900: "#1C1C1F",
          950: "#1A191C",
        },
        
      },
      keyframes: {
        "progress-loading": {
          "50% ": {
            "background-position-x": "-115%",
          },
        },
        checkmark: {
          "0%": {
            "background-position-y": "5px",
          },
          "50%": {
            "background-position-y": "-2px",
          },
          "100%": {
            "background-position-y": "0",
          },
        },
        radiomark: {
          '0%': {
            'box-shadow':
              '0 0 0 12px #302F34  inset, 0 0 0 12px #302F34  inset'
          },
          '50%': {
            'box-shadow':
              '0 0 0 3px #302F34  inset, 0 0 0 3px #302F34  inset'
          },
          '100%' : {
            'box-shadow':
             '0 0 0 4px #302F34  inset, 0 0 0 4px #302F34  inset'
          }
        }
      },
      animation: {
        "progress-loading": "progress-loading 5s ease-in-out infinite",
        'checkmark': "checkmark 0.2s ease-out",
        'radiomark': ' radiomark 0.2s ease-out'
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  
};
