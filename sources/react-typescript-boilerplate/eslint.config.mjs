import globals from "globals";
import js from "@eslint/js";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: globals.browser } },
	js.configs.recommended,
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	{
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"import/no-unresolved": "warn",
			"import/extensions": "warn"
		}
	}
];
