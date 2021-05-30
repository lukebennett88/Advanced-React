/* eslint-disable global-require, import/no-extraneous-dependencies */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#ff0000",
        },
        black: {
          DEFAULT: "#393939",
        },
        gray: {
          lightest: "#ededed",
          light: "#e1e1e1",
          DEFAULT: "#3a3a3a",
        },
      },
      fontFamily: {
        sans: ["Radnika Next", ...defaultTheme.fontFamily.sans],
      },
      skew: {
        '-5': '-5deg',
        '5': '5deg',
        '-7': '-7deg',
        '7': '7deg',
        '-20': '-20deg',
        '20': '20deg',
      },
      spacing: {
        100: '25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
