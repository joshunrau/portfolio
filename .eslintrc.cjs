// @ts-check

const path = require("node:path");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "plugin:astro/recommended",
    "plugin:astro/jsx-a11y-strict"
  ],
  env: {
    es2022: true,
    node: true
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        extraFileExtensions: [".astro"],
        parser: "@typescript-eslint/parser",
        project: path.resolve(__dirname, "tsconfig.json")
      },
      rules: {}
    }
  ]
};
