import customTsConfig from 'eslint-config/ts'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['web/dist/', 'web/vite.config.ts'] },
  ...customTsConfig,
  {
    files: ['web/**/*.tsx'],
    rules: {
      'prefer-const': 'error',
      'prefer-let/prefer-let': 'off'
    }
  }
]
