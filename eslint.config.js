import customJsConfig from 'eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist/'] },
  ...customJsConfig,
]
