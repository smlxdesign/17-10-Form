import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      eqeqeq: 'warn',
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
    },
  },
];
