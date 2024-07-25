import customTsConfig from 'eslint-config/ts'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist/'] },
  ...customTsConfig,
]
