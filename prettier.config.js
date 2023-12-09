/** @type {import("prettier").Options} */
export default {
  plugins: ["prettier-plugin-astro"],
  htmlWhitespaceSensitivity: "ignore",
  printWidth: 120,
  trailingComma: "none",
  singleQuote: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ]
};
