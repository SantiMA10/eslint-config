module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort', 'import', 'jest'],
	env: {
		'jest/globals': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:jest/style',
		'plugin:prettier/recommended',
	],
	rules: {
		'prettier/prettier': 'error',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
	},
};
