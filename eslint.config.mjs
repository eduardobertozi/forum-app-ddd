import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    extends: ['plugin:vitest-globals/recommended'],
    rules: {
      'no-useless-constructor': 'off',
    },
    env: {
      files: ['**/*.{j,t}s?(x)', '**/*.spec.{j,t}s?(x)'],
      'vitest-globals/env': true,
    },
  },
]
