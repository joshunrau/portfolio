/** @type {import("prettier").Options} */
export default {
  plugins: ['prettier-plugin-astro', '@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  printWidth: 120,
  trailingComma: 'none',
  singleQuote: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
