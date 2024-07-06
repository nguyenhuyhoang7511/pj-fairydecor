import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    }
  },
  {
    files: ['**/*.js', '**/*.vue'],
    rules: {
      'no-debugger': 'warn',
      'vue/no-unused-vars': ["error", {
        "ignorePattern": "^_"
      }],
      'vue/multi-word-component-names': 'off',
      "vue/no-multiple-template-root": 0,
      '@typescript-eslint/no-explicit-any': 'off',
    }
  }
)