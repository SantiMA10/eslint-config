module.exports = {
	extends: ['plugin:react/recommended', './index.js', 'plugin:@next/next/core-web-vitals'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
	},
	globals: {
		React: 'writable',
	},
};
