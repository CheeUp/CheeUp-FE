import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import parser from "@typescript-eslint/parser";

const compat = new FlatCompat({
  baseDirectory: path.resolve(),
});

export default [
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      import: importPlugin,
    },
    rules: {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".jsx", ".tsx"] },
      ],
      "react/function-component-definition": [
        2,
        { namedComponents: ["arrow-function", "function-declaration"] },
      ],
      "no-var": "error",
      "no-multiple-empty-lines": "error",
      "no-console": ["error", { allow: ["warn", "error", "info"] }],
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
  {
    ignores: ["**/*.css", "**/*.svg"], // CSS와 SVG 파일 무시
  },
];
