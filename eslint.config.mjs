import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintParserTypeScript from "@typescript-eslint/parser";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ✅ Corrected compat config
  ...compat.config({
    extends: [
      "next/core-web-vitals", // Next.js rules
      "next/typescript", // TS rules
      "plugin:react/recommended", // ✅ Correct react config
      "plugin:react-hooks/recommended", // ✅ Correct react-hooks config
      "prettier", // Prettier integration
    ],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "react/react-in-jsx-scope": "off",
    },
  }),

  // ✅ Better Tailwind config (flat style)
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
      "better-tailwindcss/enforce-consistent-line-wrapping": ["warn", { printWidth: 300 }],
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "app/globals.css",
      },
    },
  },
];

export default eslintConfig;
