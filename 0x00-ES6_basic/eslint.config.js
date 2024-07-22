// eslint.config.js

module.exports = {
  files: ['**/*.js'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      es6: 'readonly',
      node: 'readonly',
      jest: 'readonly',
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
  ignores: ['node_modules/**'],
};

