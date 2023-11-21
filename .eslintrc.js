module.exports = {
	settings: {
		react: {
			version: 'detect'
		}
	},
	env: {
		es2022: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime'
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				tabWidth: 2,
				useTabs: true,
				endOfLine: 'auto',
				singleQuote: true,
				semi: true,
				trailingComma: 'none',
				bracketSpacing: true,
				printWidth: 100
			}
		],
		'no-console': 'warn',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn'
	}
};
