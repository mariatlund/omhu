/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/modules/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      headline: ["gira-sans", "sans-serif"],
      body: ["poppins", "sans-serif"],
    },
    colors: {
      blue: {
        DEFAULT: "#1D00B2",
        75: "#5640C5",
        50: "#8E80D9",
        25: "#DED8FF",
      },
      grey: {
        DEFAULT: "#5F5F5D",
        75: "#919190",
        50: "#C9C9C9",
        25: "#EAEAE9 ",
      },
      orange: {
        DEFAULT: "#E36409",
      },
      link: {
        DEFAULT: "#035FCC",
        50: "#90AFFF",
      },
      white: {
        DEFAULT: "#FAFAFA",
      },
      error: {
        DEFAULT: "#EE3900",
      },
    },
    fontSize: {
      12: "0.75rem",
      14: "0.875rem",
      base: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      64: "4rem",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
