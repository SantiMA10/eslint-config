const readPkgUp = require('read-pkg-up');

let hasJest = false;

try {
	const { packageJson } = readPkgUp.sync({ normalize: true });
	const allDeps = Object.keys({
		...packageJson.peerDependencies,
		...packageJson.devDependencies,
		...packageJson.dependencies,
	});

	hasJest = allDeps.includes('jest');
} catch (error) {
	// ignore error
}

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'prettier',
		'simple-import-sort',
		'import',
		...(hasJest ? ['jest'] : []),
	],
	env: {
		...(hasJest ? { 'jest/globals': true } : {}),
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		...(hasJest
			? ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:prettier/recommended']
			: []),
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
