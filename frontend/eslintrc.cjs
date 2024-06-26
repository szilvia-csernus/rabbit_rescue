const vitest = require('eslint-plugin-vitest')

module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:vitest/recommended',
		'plugin:testing-library/react',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react/jsx-no-target-blank': 'off',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'no-unused-vars': 'warn',
		'vitest/expect-expect': 'off',
		'react/prop-types': 'off',
	},
	globals: {
		...vitest.environments.env.globals,
	}
};
