import containerQueries from "@tailwindcss/container-queries";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem"
        }
      },
      spacing: {
        26: "6.5rem",
        112: "28rem",
        128: "32rem"
      }
    },
    fontFamily: {
      display: ["Lato", ...defaultTheme.fontFamily.sans],
      sans: ["Montserrat Variable", ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [containerQueries]
};
