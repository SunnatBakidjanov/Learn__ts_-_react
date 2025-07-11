import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
	},
	{
		env: {
			browser: true,
			es2021: true,
		},
		extends: [
			'eslint:recommended',
			'plugin:@eslint/js/recommended',
			'plugin:prettier/recommended',
			'plugin:html/recommended',
		],
		plugins: ['prettier', 'html'],
		overrides: [
			{
				files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
				languageOptions: {
					globals: {
						window: 'readonly',
						document: 'readonly',
						navigator: 'readonly',
					},
				},
				rules: {
					'prettier/prettier': [
						'warn',
						{
							endOfLine: 'auto',
						},
					],
				},
			},
		],
		rules: {},
	},
]);
