const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    /** Add new breakpoint: xs. */
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        // NOTE: These colors are not fixed.
        "blue-10": " #E6F5FF",
        "blue-100": " #60D4FF",
        "blue-200": " #02BBFF",
        "blue-300": " #2DAFFD",
        "blue-400": " #029FFD",
        "blue-500": " #0065C1",
        "blue-600": " #00519C",
        "blue-10p": " rgba(2, 159, 253, 0.1)",
        "neutrals-0": " #FFFFFF",
        "neutrals-10": " #FCFCFC",
        "neutrals-20": " #F5F5F5",
        "neutrals-30": " #D9D9D9",
        "neutrals-40": " #BFBFBF",
        "neutrals-100": " #758592",
        "neutrals-200": " #556978",
        "neutrals-300": " #465A69",
        "neutrals-400": " #384753",
        "neutrals-500": " #152430",
        "neutrals-600": " #0B131A",
        "neutrals-10p": " rgba(56, 71, 83, 0.1)",
        "red-10": " #FCEDED",
        "red-100": " #F3B3B3",
        "red-200": " #FF8C8C",
        "red-300": " #FF5C5C",
        "red-400": " #FF2424",
        "red-500": " #C10000",
        "red-600": " #9C1616",
        "red-10p": " rgba(255, 36, 36, 0.1)",
        "yellow-10": " #FFF4E9",
        "yellow-100": " #FFE89A",
        "yellow-200": " #FFDF70",
        "yellow-300": " #FFD56A",
        "yellow-400": " #FCCB4E",
        "yellow-500": " #E4AF26",
        "yellow-600": " #937A39",
        "yellow-10p": " rgba(255, 199, 9, 0.1)",
        "green-10": " #EBF7E6",
        "green-100": " #97F5B7",
        "green-200": " #78EFA0",
        "green-300": " #55EC88",
        "green-400": " #2ECA63",
        "green-500": " #1FA94E",
        "green-600": " #167B38",
        "green-10p": " rgba(61, 217, 114, 0.1)",
        "purple-100": " #B6B1E0",
        "purple-200": " #9891D3",
        "purple-300": " #6C61C0",
        "purple-400": " #4E41B3",
        "purple-500": " #372E7D",
        "purple-600": " #30286D",
        "purple-10p": " #EDECF7",
        // "fuchsia-100": " #EF9AC9",
        // "fuchsia-200": " #E970B2",
        // "fuchsia-300": " #DF3291",
        // "fuchsia-400": " #D9087B",
        // "fuchsia-500": " #980656",
        // "fuchsia-600": " #84054B",
        // "fuchsia-10p": " #FBE6F2",
      },
      boxShadow: {
        "5p": "0px 4px 12px rgba(0, 0, 0, 0.05)",
        "10p": "0px 4px 16px rgba(0, 0, 0, 0.1)",
        "15p": "0px 4px 28px rgba(0, 0, 0, 0.15)",
        "20p": "0px 8px 40px rgba(0, 0, 0, 0.2)",
        "25p": "0px 12px 64px rgba(0, 0, 0, 0.25)",
      },
      fontSize: {
        "h1-mobile": "28px",
        "h2-mobile": "24px",
        "h3-mobile": "20px",
        "h4-mobile": "18px",
        "h5-mobile": "16px",
        "h6-mobile": "14px",
        "p-mobile": "14px",
        "body-lg-mobile": "12px",
        "body-md-mobile": "10px",
        "body-sm-mobile": "8px",
        "h1-desktop": "40px",
        "h2-desktop": "32px",
        "h3-desktop": "28px",
        "h4-desktop": "24px",
        "h5-desktop": "20px",
        "h6-desktop": "18px",
        "p-desktop": "16px",
        "body-lg-desktop": "14px",
        "body-md-desktop": "12px",
        "body-sm-desktop": "10px",
      },
      lineHeight: {
        "h1-mobile": "32px",
        "h2-mobile": "32px",
        "h3-mobile": "26px",
        "h4-mobile": "24px",
        "h5-mobile": "22px",
        "h6-mobile": "20px",
        "p-mobile": "24px",
        "body-lg-mobile": "18px",
        "body-md-mobile": "14px",
        "body-sm-mobile": "10px",
        "h1-desktop": "48px",
        "h2-desktop": "40px",
        "h3-desktop": "36px",
        "h4-desktop": "32px",
        "h5-desktop": "28px",
        "h6-desktop": "28px",
        "p-desktop": "24px",
        "body-lg-desktop": "20px",
        "body-md-desktop": "18px",
        "body-sm-desktop": "14px",
      },
      letterSpacing: {
        "h1-mobile": "-0.003em",
        "h2-mobile": "-0.001em",
        "h1-desktop": "-0.003em",
        "h2-desktop": "-0.003em",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
  mode: "jit",
}
