import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  ignores: [
    '**/fixtures',
  ],
  rules: {
    'prefer-template': 'error',
  },
})