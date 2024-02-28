"use strict";

const { config } = require("@susisu/eslint-config");
const vitestPlugin = require("eslint-plugin-vitest");
const globals = require("globals");

module.exports = config({}, [
  {
    plugins: {
      vitest: vitestPlugin,
    },
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.es2021,
      },
    },
  },
  {
    files: ["src/**/*.test.ts", "src/**/__tests__/**/*.ts"],
    rules: {
      ...vitestPlugin.configs.recommended.rules,
    },
  },
  {
    files: ["*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
]);
