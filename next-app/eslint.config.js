import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPluginRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactRefresh from "eslint-plugin-react-refresh";
import { fixupPluginRules } from "@eslint/compat";
import neostandard from "neostandard";

export default tseslint.config(
    eslint.configs.recommended,
    ...neostandard({ noStyle: true }),
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    ...tseslint.configs.stylistic,
    jsxA11y.flatConfigs.recommended,
    prettierPluginRecommended,
    { ignores: [".next/*", "node_modules/*"] },
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: { jsx: true },
                tsconfigRootDir: import.meta.dirname,
                project: ["tsconfig.json"],
            },
            globals: { ...globals.browser },
        },
    },
    {
        /** @see https://typescript-eslint.io/packages/typescript-eslint/#flat-config-extends */ files:
            ["**/*.{js,mjs,cjs,jsx,ts.tsx}"],
        extends: [tseslint.configs.disableTypeChecked],
    },
    {
        plugins: {
            react: reactPlugin,
            /** @see https://github.com/facebook/react/issues/28313 */ "react-hooks":
                fixupPluginRules(reactHooksPlugin),
            "react-refresh": reactRefresh,
        },
        settings: { react: { version: "detect" } },
        rules: {
            ...reactPlugin.configs["recommended"].rules,
            ...reactPlugin.configs["jsx-runtime"].rules,
            ...reactHooksPlugin.configs.recommended.rules,
            "react-refresh/only-export-components": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "prettier/prettier": "error",
        },
    }
);
